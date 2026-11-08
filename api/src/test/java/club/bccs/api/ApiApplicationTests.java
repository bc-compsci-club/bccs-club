package club.bccs.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(properties = {"admin.api-key=test-admin-key", "showcase.admin-api-key=test-showcase-key"})
@AutoConfigureMockMvc
@ActiveProfiles("test")
class ApiApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void contextLoads() {
	}

	@Test
	void calendarWritesRequireAdminAuthentication() throws Exception {
		String event = """
			{
			  "title": "Temporary unauthenticated write check",
			  "description": "Created and removed by the local test suite only.",
			  "location": "Test environment",
			  "startTime": "2030-01-01T10:00:00",
			  "endTime": "2030-01-01T11:00:00",
			  "isActive": false,
			  "rsvpLink": "",
			  "flierLink": ""
			}
			""";

		mockMvc.perform(post("/v1/calendar/events")
				.contentType("application/json").content(event))
				.andExpect(status().isForbidden());
		mockMvc.perform(post("/v1/calendar/events")
				.header("X-Showcase-Admin-Key", "test-showcase-key")
				.contentType("application/json").content(event))
				.andExpect(status().isForbidden());

		MvcResult created = mockMvc.perform(post("/v1/calendar/events")
				.header("X-Admin-Key", "test-admin-key")
				.contentType("application/json")
				.content(event))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.id").isNumber())
				.andReturn();

		String eventId = com.jayway.jsonpath.JsonPath.read(created.getResponse().getContentAsString(), "$.id").toString();
		mockMvc.perform(delete("/v1/calendar/events/{id}", eventId))
				.andExpect(status().isForbidden());
		mockMvc.perform(delete("/v1/calendar/events/{id}", eventId)
				.header("X-Admin-Key", "test-admin-key"))
				.andExpect(status().isNoContent());
	}

	@Test
	void showcaseRejectsUnauthorizedWritesAndDuplicateSlugs() throws Exception {
		String endpoint = "/v1/showcase/projects";
		String project = """
				{
				  "title": "Authentication Test",
				  "shortDescription": "Test description",
				  "description": "Test project",
				  "authorName": "Test author",
				  "techStack": "Java",
				  "categories": ["Web", "Mobile"]
				}
				""";

		mockMvc.perform(post(endpoint).contentType("application/json").content(project))
				.andExpect(status().isForbidden());
		MvcResult created = mockMvc.perform(post(endpoint).header("X-Showcase-Admin-Key", "test-showcase-key")
				.contentType("application/json").content(project))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.slug").value("authentication-test"))
				.andReturn();
		mockMvc.perform(post(endpoint).header("X-Admin-Key", "test-admin-key")
				.contentType("application/json").content(project))
				.andExpect(status().isConflict());
		String projectId = com.jayway.jsonpath.JsonPath.read(
				created.getResponse().getContentAsString(), "$.id").toString();
		mockMvc.perform(delete(endpoint + "/{id}", projectId).header("X-Admin-Key", "test-admin-key"))
				.andExpect(status().isNoContent());
	}
}
