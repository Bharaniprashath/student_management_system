package com.snowman.student.student_management_system.service;

import com.snowman.student.student_management_system.model.Student;
import com.snowman.student.student_management_system.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

@Service
public class StudentService {

    private static final Logger log = LoggerFactory.getLogger(StudentService.class);
    private final StudentRepository db;

    public StudentService(StudentRepository db){
        this.db = db;
    }


    public String greetings(){
        return "Hello welcome to student management systems";
    }

    public Iterable<Student> get(){
        return db.findAll();
    }

    public Student get(@PathVariable Integer id){
        Student student = db.findById(id).orElse(null);
        if(student == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        return db.findById(id).orElse(null);
    }

    public void create(@RequestBody Student student){
        db.save(student);
    }

    public void remove(@PathVariable Integer id){
        db.deleteById(id);
    }

    public void update(Integer id, Student student) {
        if(student == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        student.setId(id);
        db.save(student);
    }
}
