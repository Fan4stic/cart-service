DROP DATABASE IF EXISTS cart;

CREATE DATABASE cart;

USE cart;


CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  photo_num INT,
  url VARCHAR(250),
  PRIMARY KEY(id)
);

CREATE TABLE item_details (
  id INT NOT NULL AUTO_INCREMENT,
  photo_id INT NOT NULL,
  item_name VARCHAR(100),
  item_description VARCHAR(100),
  item_price DECIMAL(3, 2),
  PRIMARY KEY(id),
  FOREIGN KEY(photo_id) REFERENCES photos(id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100),
  email VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE options (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT NOT NULL,
  quantity INT,
  options VARCHAR(250),
  special_instructions VARCHAR(250),
  PRIMARY KEY(id),
  FOREIGN KEY(item_id) REFERENCES item_details(id)
);

CREATE TABLE cart (
  id INT NOT NULL AUTO_INCREMENT,
  options_id INT NOT NULL,
  user_id INT NOT NULL,
  date_created VARCHAR(100),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(options_id) REFERENCES options(id)
);