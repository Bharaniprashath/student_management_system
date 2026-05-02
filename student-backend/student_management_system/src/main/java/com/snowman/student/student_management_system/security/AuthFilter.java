package com.snowman.student.student_management_system.security;
import java.io.IOException;

import org.springframework.web.filter.OncePerRequestFilter;

import com.snowman.student.student_management_system.service.TokenService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthFilter extends OncePerRequestFilter{

    private final TokenService tokenService;

    public AuthFilter(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();

        System.out.println("PATH: " + path);
        if (request.getMethod().equals("OPTIONS")) {
            filterChain.doFilter(request, response);
            return;
        }

        if (path.startsWith("/login") || path.startsWith("/register")) {
            filterChain.doFilter(request, response);
            return;
        }

        String header = request.getHeader("Authorization");
        System.out.println("header: " + header);
        String token = null;
        if (header != null && header.startsWith("Bearer ")) {
            token = header.substring(7);
            if (!tokenService.validateToken(token)) {
                System.out.println("Invalid Token");
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }
        if (token == null) {
            System.out.println("Token is not available");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        filterChain.doFilter(request, response);
    }
}
