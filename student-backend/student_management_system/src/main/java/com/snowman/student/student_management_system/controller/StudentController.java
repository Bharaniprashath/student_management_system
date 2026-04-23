package com.snowman.student.student_management_system.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.snowman.student.student_management_system.model.Student;
import com.snowman.student.student_management_system.service.StudentService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @GetMapping("/student")
    public Iterable<Student> get(){
        return studentService.get();
    }

    @GetMapping("/student/{id}")
    public Student get(@PathVariable Integer id){
        return studentService.get(id);
    }

    @PostMapping("/student")
    public void create(@RequestBody Student student){
        studentService.create(student);
    }

    @DeleteMapping("/student/{id}")
    public void delete(@PathVariable Integer id){
        studentService.remove(id);
    }

    @PutMapping("/student/{id}")
    public void update(@PathVariable Integer id, @RequestBody Student student){
        studentService.update(id, student);
    }
}
