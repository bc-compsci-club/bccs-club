package club.bccs.api.config;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Set;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Configuration
public class AdminWriteConfig implements WebMvcConfigurer {
    private static final Set<String> READ_METHODS = Set.of("GET", "HEAD", "OPTIONS");
    private final String adminKey;
    private final String showcaseKey;

    public AdminWriteConfig(@Value("${admin.api-key:}") String adminKey,
            @Value("${showcase.admin-api-key:}") String showcaseKey) {
        this.adminKey = adminKey;
        this.showcaseKey = showcaseKey;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(writeGuard(false)).addPathPatterns("/v1/calendar/events", "/v1/calendar/events/**");
        registry.addInterceptor(writeGuard(true)).addPathPatterns("/v1/showcase/projects", "/v1/showcase/projects/**");
    }

    private HandlerInterceptor writeGuard(boolean showcase) {
        return new HandlerInterceptor() {
            @Override
            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
                if (READ_METHODS.contains(request.getMethod())
                        || matches(adminKey, request.getHeader("X-Admin-Key"))
                        || (showcase && matches(showcaseKey, request.getHeader("X-Showcase-Admin-Key")))) {
                    return true;
                }
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "A valid admin key is required");
            }
        };
    }

    private static boolean matches(String expected, String supplied) {
        return !expected.isBlank() && supplied != null && MessageDigest.isEqual(
                expected.getBytes(StandardCharsets.UTF_8), supplied.getBytes(StandardCharsets.UTF_8));
    }
}
