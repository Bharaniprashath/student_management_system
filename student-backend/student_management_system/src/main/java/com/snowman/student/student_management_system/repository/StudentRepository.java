package com.snowman.student.student_management_system.repository;

import com.snowman.student.student_management_system.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Integer> {

}
