package com.snowman.student.student_management_system.security;

import com.snowman.student.student_management_system.service.TokenService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public AuthFilter authFilter(TokenService tokenService) {
        return new AuthFilter(tokenService);
    }
}
