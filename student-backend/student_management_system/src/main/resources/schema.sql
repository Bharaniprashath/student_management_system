create table if not exists student(
    id bigint auto_increment primary key ,
    name varchar(20) ,
    reg_no varchar(20) ,
    age integer ,
    email varchar(30),
    mobile_no varchar(20)
);

create table if not exists users(
    id bigint auto_increment primary key,
    username varchar(20) unique,
    password varchar(30)
);

create table if not exists tokens (
    id bigint auto_increment primary key,
    username varchar(20),
    token varchar(255) unique,
    expiry TIMESTAMP
);
