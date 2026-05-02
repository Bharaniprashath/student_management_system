package com.snowman.student.student_management_system.controller;

import com.snowman.student.student_management_system.model.User;
import com.snowman.student.student_management_system.service.AuthService;
import com.snowman.student.student_management_system.service.UserService;
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

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class StudentController {

    private final StudentService studentService;
    private final UserService userService;
    private final AuthService authService;

    public StudentController(StudentService studentService, UserService userService, AuthService authService) {
        this.studentService = studentService;
        this.userService = userService;
        this.authService = authService;
    }

    @GetMapping("/student")
    public Iterable<Student> get() {
        return studentService.get();
    }

    @GetMapping("/student/{id}")
    public Student get(@PathVariable Integer id) {
        return studentService.get(id);
    }

    @PostMapping("/student")
    public void create(@RequestBody Student student) {
        studentService.create(student);
    }

    @DeleteMapping("/student/{id}")
    public void delete(@PathVariable Integer id) {
        studentService.remove(id);
    }

    @PutMapping("/student/{id}")
    public void update(@PathVariable Integer id, @RequestBody Student student) {
        studentService.update(id, student);
    }

    @PostMapping("/register")
    public void register(@RequestBody User user) {
        userService.create(user);
    }

    @GetMapping("/users")
    public Iterable<User> getUser() {
        return userService.getUser();
    }

    @PostMapping("/login")
    public Map<String, String> auth(@RequestBody User user){
        System.out.println("Username: " + user.getUsername());
        System.out.println("Password: " + user.getPassword());
        return authService.checkAuth(user);
    }
}

