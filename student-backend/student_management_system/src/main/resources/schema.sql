create table if not exists student(
    id bigint auto_increment primary key ,
    name varchar(20) ,
    reg_no varchar(20) ,
    age integer ,
    email varchar(30),
    mobile_no varchar(20)
);