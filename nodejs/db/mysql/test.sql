create database Test_DB;

USE Test_DB;
CREATE TABLE `Tab_User_Info` (
  id  INT(100) AUTO_INCREMENT PRIMARY KEY,
  `name`  VARCHAR(50)  NOT NULL COMMENT '姓名',
  title VARCHAR(50) DEFAULT NULL,
  description VARCHAR(50)  DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT = 'test user';