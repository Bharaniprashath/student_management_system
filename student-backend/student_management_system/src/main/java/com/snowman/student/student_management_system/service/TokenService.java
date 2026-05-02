package com.snowman.student.student_management_system.service;

import com.snowman.student.student_management_system.model.Token;
import com.snowman.student.student_management_system.repository.TokenRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class TokenService {

    private final TokenRepository tokenRepository;

    public TokenService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    public String generateToken(String username){
        return UUID.randomUUID().toString();
    }

    public boolean validateToken(String tokenValue){

        Token token = tokenRepository.findByToken(tokenValue);

        if(token.getExpiry().isBefore(LocalDateTime.now())){
            return false;
        }
        if(token == null){
            tokenRepository.delete(token);
            return false;
        }

        return true;
    }

    public void save(Token token){
        tokenRepository.save(token);
    }
}
