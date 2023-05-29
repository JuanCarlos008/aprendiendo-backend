INSERT INTO TblCourse_Category (title) VALUES
('Category 1'),
('Category 2'),
('Category 3');

INSERT INTO TblCourse (title, description, cost, duration, created_at, updated_at, category_id, institution_id) VALUES
('Course 1', 'Description 1', 100, 10, NOW(), NOW(), 1, 1),
('Course 2', 'Description 2', 200, 20, NOW(), NOW(), 2, 2),
('Course 3', 'Description 3', 300, 30, NOW(), NOW(), 3, 1);

INSERT INTO TblModule (title, description, position, duration, created_at, updated_at, course_id) VALUES
('Module 1', 'Module Description 1', 1, 5, NOW(), NOW(), 1),
('Module 2', 'Module Description 2', 2, 8, NOW(), NOW(), 1),
('Module 3', 'Module Description 3', 1, 7, NOW(), NOW(), 2),
('Module 4', 'Module Description 4', 2, 6, NOW(), NOW(), 2),
('Module 5', 'Module Description 5', 1, 10, NOW(), NOW(), 3);

INSERT INTO TblLesson (title, description, content_type, url_video, duration, position, created_at, updated_at, module_id) VALUES
('Lesson 1', 'Lesson Description 1', 'Video', 'video_url_1', 5, 1, NOW(), NOW(), 1),
('Lesson 2', 'Lesson Description 2', 'Video', 'video_url_2', 7, 2, NOW(), NOW(), 1),
('Lesson 3', 'Lesson Description 3', 'Text', '', 10, 1, NOW(), NOW(), 2),
('Lesson 4', 'Lesson Description 4', 'Text', '', 8, 2, NOW(), NOW(), 2),
('Lesson 5', 'Lesson Description 5', 'Video', 'video_url_3', 6, 1, NOW(), NOW(), 3),
('Lesson 6', 'Lesson Description 6', 'Video', 'video_url_4', 9, 2, NOW(), NOW(), 3);

INSERT INTO TblComment (content, lesson_id, user_id, created_at, updated_at) VALUES
('Comment 1', 1, 1, NOW(), NOW()),
('Comment 2', 1, 2, NOW(), NOW()),
('Comment 3', 2, 1, NOW(), NOW()),
('Comment 4', 3, 2, NOW(), NOW()),
('Comment 5', 3, 1, NOW(), NOW());

INSERT INTO TblCourse_Enrollment (course_id, user_id, created_at, updated_at) VALUES
(1, 1, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(2, 3, NOW(), NOW());

INSERT INTO TblUser_Type (title, created_at) VALUES
('User Type 1', NOW()),
('User Type 2', NOW()),
('User Type 3', NOW());

INSERT INTO TblUser (email, password, created_at, updated_at, user_type_id) VALUES
('user1@example.com', 'password1', NOW(), NOW(), 1),
('user2@example.com', 'password2', NOW(), NOW(), 2),
('user3@example.com', 'password3', NOW(), NOW(), 3);

INSERT INTO TblProfessional_Profile (name, last_name, about, cv_url, porfolio_url, image_url, gender, user_id, created_at, updated_at) VALUES
('John', 'Doe', 'About John Doe', 'cv_url_1', 'portfolio_url_1', 'image_url_1', 'M', 1, NOW(), NOW()),
('Jane', 'Smith', 'About Jane Smith', 'cv_url_2', 'portfolio_url_2', 'image_url_2', 'F', 2, NOW(), NOW());

INSERT INTO TblInstitution_Profile (name, about, image_url, user_id, created_at, updated_at) VALUES
('Institution 1', 'About Institution 1', 'image_url_3', 1, NOW(), NOW()),
('Institution 2', 'About Institution 2', 'image_url_4', 3, NOW(), NOW());

INSERT INTO TblSkill (name, created_at) VALUES
('Skill 1', NOW()),
('Skill 2', NOW()),
('Skill 3', NOW());

INSERT INTO TblProfessional_Skill (skill_id, user_id, created_at, updated_at) VALUES
(1, 1, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(3, 2, NOW(), NOW());

INSERT INTO TblSession (token, refresh_token, user_id, created_at, updated_at) VALUES
('token_1', 'refresh_token_1', 1, NOW(), NOW()),
('token_2', 'refresh_token_2', 2, NOW(), NOW()),
('token_3', 'refresh_token_3', 3, NOW(), NOW());

INSERT INTO TblExam (title, description, duration, course_id, created_at, updated_at) VALUES
('Exam 1', 'Exam Description 1', 60, 1, NOW(), NOW()),
('Exam 2', 'Exam Description 2', 90, 2, NOW(), NOW()),
('Exam 3', 'Exam Description 3', 120, 3, NOW(), NOW());

INSERT INTO TblQuestion (statement, exam_id, created_at, updated_at) VALUES
('Question 1', 1, NOW(), NOW()),
('Question 2', 1, NOW(), NOW()),
('Question 3', 2, NOW(), NOW()),
('Question 4', 2, NOW(), NOW()),
('Question 5', 3, NOW(), NOW());

INSERT INTO TblOption (text_option, correct, question_id, created_at, updated_at) VALUES
('Option 1', true, 1, NOW(), NOW()),
('Option 2', false, 1, NOW(), NOW()),
('Option 3', false, 1, NOW(), NOW()),
('Option 4', true, 2, NOW(), NOW()),
('Option 5', false, 2, NOW(), NOW()),
('Option 6', false, 2, NOW(), NOW()),
('Option 7', false, 3, NOW(), NOW()),
('Option 8', true, 3, NOW(), NOW()),
('Option 9', false, 3, NOW(), NOW()),
('Option 10', false, 4, NOW(), NOW()),
('Option 11', true, 4, NOW(), NOW()),
('Option 12', false, 4, NOW(), NOW()),
('Option 13', false, 5, NOW(), NOW()),
('Option 14', false, 5, NOW(), NOW()),
('Option 15', true, 5, NOW(), NOW());

INSERT INTO TblAnswer (user_id, question_id, option_id, score, created_at, updated_at) VALUES
(1, 1, 1, 1.0, NOW(), NOW()),
(1, 2, 4, 1.0, NOW(), NOW()),
(2, 1, 2, 0.5, NOW(), NOW()),
(2, 2, 5, 0.5, NOW(), NOW()),
(2, 3, 8, 1.0, NOW(), NOW()),
(3, 3, 7, 0.0, NOW(), NOW()),
(3, 4, 11, 1.0, NOW(), NOW()),
(3, 5, 15, 1.0, NOW(), NOW());

INSERT INTO TblScore (score, user_id, exam_id, course_id, created_at, updated_at) VALUES
(80.0, 1, 1, 1, NOW(), NOW()),
(90.0, 1, 2, 1, NOW(), NOW()),
(95.0, 2, 1, 1, NOW(), NOW()),
(85.0, 2, 2, 1, NOW(), NOW()),
(70.0, 3, 3, 1, NOW(), NOW());