CREATE TABLE TblCourse_Category (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE TblCourse (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  description varchar(500) NOT NULL,
  cost int,
  duration int,
  image_url varchar(300) NOT NULL,
  start_date date,
  end_date date,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  category_id int NOT NULL,
  institution_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE TblModule (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(200) NOT NULL,
  description varchar(500) NOT NULL,
  position int NOT NULL,
  duration int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  course_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE TblLesson (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  description varchar(500) NOT NULL,
  content_type varchar(30) NOT NULL,
  url_video varchar(300) NOT NULL,
  duration int NOT NULL,
  position int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  module_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE TblComment (
  id int NOT NULL AUTO_INCREMENT,
  content varchar(1000) NOT NULL,
  lesson_id int NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblCourse_Enrollment (
  id int NOT NULL AUTO_INCREMENT,
  course_id int NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblUser_Type (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblUser (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(150) NOT NULL,
  password varchar(150) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_type_id int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE TblProfessional_Profile(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(75) NOT NULL,
  last_name varchar(150) NOT NULL,
  about varchar(500) NOT NULL,
  cv_url varchar(300) NOT NULL,
  porfolio_url varchar(300) NOT NULL,
  image_url varchar(300) NOT NULL,
  gender ENUM('M', 'F') NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblInstitution_Profile(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(75) NOT NULL,
  about varchar(500) NOT NULL,
  image_url varchar(300) NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblSkill(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblProfessional_Skill(
  id int NOT NULL AUTO_INCREMENT,
  skill_id int NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblSession (
  id int NOT NULL AUTO_INCREMENT,
  token varchar(500) NOT NULL,
  refresh_token varchar(500) NOT NULL,
  user_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblExam (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  description varchar(500) NOT NULL,
  duration int NOT NULL,
  course_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblQuestion (
  id int NOT NULL AUTO_INCREMENT,
  statement varchar(500) NOT NULL,
  exam_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblOption (
  id int NOT NULL AUTO_INCREMENT,
  text_option varchar(500) NOT NULL,
  correct boolean NOT NULL,
  question_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblAnswer (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  question_id int NOT NULL,
  option_id int NOT NULL,
  score decimal(10, 2) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE TblScore (
  id int NOT NULL AUTO_INCREMENT,
  score decimal(10, 2) NOT NULL,
  user_id int NOT NULL,
  exam_id int NOT NULL,
  course_id int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- Agregar las claves foráneas al final de cada tabla

ALTER TABLE TblCourse ADD FOREIGN KEY (category_id) REFERENCES TblCourse_Category(id);
ALTER TABLE TblCourse ADD FOREIGN KEY (institution_id) REFERENCES TblInstitution_Profile(id);
ALTER TABLE TblModule ADD FOREIGN KEY (course_id) REFERENCES TblCourse(id);
ALTER TABLE TblLesson ADD FOREIGN KEY (module_id) REFERENCES TblModule(id);
ALTER TABLE TblComment ADD FOREIGN KEY (lesson_id) REFERENCES TblLesson(id);
ALTER TABLE TblComment ADD FOREIGN KEY (user_id) REFERENCES TblProfessional_Profile(id);
ALTER TABLE TblCourse_Enrollment ADD FOREIGN KEY (course_id) REFERENCES TblCourse(id);
ALTER TABLE TblCourse_Enrollment ADD FOREIGN KEY (user_id) REFERENCES TblUser(id);
ALTER TABLE TblUser ADD FOREIGN KEY (user_type_id) REFERENCES TblUser_Type(id);
ALTER TABLE TblProfessional_Profile ADD FOREIGN KEY (user_id) REFERENCES TblUser(id);
ALTER TABLE TblInstitution_Profile ADD FOREIGN KEY (user_id) REFERENCES TblUser(id);
ALTER TABLE TblProfessional_Skill ADD FOREIGN KEY (skill_id) REFERENCES TblSkill(id);
ALTER TABLE TblProfessional_Skill ADD FOREIGN KEY (user_id) REFERENCES TblProfessional_Profile(id);
ALTER TABLE TblSession ADD FOREIGN KEY (user_id) REFERENCES TblUser(id);
ALTER TABLE TblExam ADD FOREIGN KEY (course_id) REFERENCES TblCourse(id);
ALTER TABLE TblQuestion ADD FOREIGN KEY (exam_id) REFERENCES TblExam(id);
ALTER TABLE TblOption ADD FOREIGN KEY (question_id) REFERENCES TblQuestion(id);
ALTER TABLE TblAnswer ADD FOREIGN KEY (user_id) REFERENCES TblProfessional_Profile(id);
ALTER TABLE TblAnswer ADD FOREIGN KEY (question_id) REFERENCES TblQuestion(id);
ALTER TABLE TblAnswer ADD FOREIGN KEY (option_id) REFERENCES TblOption(id);
ALTER TABLE TblScore ADD FOREIGN KEY (user_id) REFERENCES TblProfessional_Profile(id);
ALTER TABLE TblScore ADD FOREIGN KEY (exam_id) REFERENCES TblExam(id);
ALTER TABLE TblScore ADD FOREIGN KEY (course_id) REFERENCES TblCourse(id);
