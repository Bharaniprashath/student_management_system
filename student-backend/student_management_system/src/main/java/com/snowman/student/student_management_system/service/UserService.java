package com.snowman.student.student_management_system.service;

import com.snowman.student.student_management_system.model.Token;
import com.snowman.student.student_management_system.model.User;
import com.snowman.student.student_management_system.repository.TokenRepository;
import com.snowman.student.student_management_system.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

@Service
public class UserService {

    private final UserRepository db;

    public UserService(UserRepository db){
        this.db = db;
    }

    public void create(User user){
        db.save(user);
    }

    public Iterable<User> getUser(){
        return db.findAll();
    }

}
