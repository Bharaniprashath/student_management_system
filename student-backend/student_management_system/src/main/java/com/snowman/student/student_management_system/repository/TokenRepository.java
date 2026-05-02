package com.snowman.student.student_management_system.repository;

import com.snowman.student.student_management_system.model.Token;
import org.springframework.data.repository.CrudRepository;


public interface TokenRepository extends CrudRepository<Token, Integer> {

    Token findByToken(String token);

}
