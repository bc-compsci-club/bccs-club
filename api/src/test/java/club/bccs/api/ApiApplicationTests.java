package club.bccs.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class ApiApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void contextLoads() {
	}

	@Test
	void calendarWriteEndpointsAcceptAnUnauthenticatedRequest() throws Exception {
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

		MvcResult created = mockMvc.perform(post("/v1/calendar/events")
				.contentType("application/json")
				.content(event))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.id").isNumber())
				.andReturn();

		String eventId = com.jayway.jsonpath.JsonPath.read(created.getResponse().getContentAsString(), "$.id").toString();
		mockMvc.perform(delete("/v1/calendar/events/{id}", eventId))
				.andExpect(status().isNoContent());
	}

}
