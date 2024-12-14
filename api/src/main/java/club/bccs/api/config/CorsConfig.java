package club.bccs.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Apply CORS to all endpoints
                        // .allowedOrigins("https://bccs.club") // Allow requests from this origin
                        .allowedOriginPatterns(
                            "https://bccs.club",
                            "https://bccs-club.pages.dev",
                            "https://*.bccs-club.pages.dev",
                            "https://*.qing-bccs-club.pages.dev",
                            "http://localhost:*"
                        )
                        // .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow specific HTTP methods
                        .allowedMethods("*") // Allow all HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // Allow cookies and authentication
            }
        };
    }
}
