package com.snowman.student.student_management_system.service;

import com.snowman.student.student_management_system.model.Token;
import com.snowman.student.student_management_system.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.snowman.student.student_management_system.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.Map;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final TokenService tokenService;

    public AuthService(UserRepository userRepository, TokenService tokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }

    public Map<String, String> checkAuth(User reqUser)  {
        User user = userRepository.findByUsername(reqUser.getUsername());

        if(user == null || !user.getPassword().equals(reqUser.getPassword())){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid Credentials");
        }

        System.out.println("Request username: " + reqUser.getUsername());
        System.out.println("DB username: " + user.getUsername());
        System.out.println("DB password: " + user.getPassword());
        System.out.println("Request password: " + reqUser.getPassword());

        String token = tokenService.generateToken(user.getUsername());

        Token tokenObj = new Token();
        tokenObj.setToken(token);
        tokenObj.setUsername(user.getUsername());
        tokenObj.setExpiry(LocalDateTime.now().plusHours(1));


        tokenService.save(tokenObj);

        return Map.of("token", token);
    }

}
