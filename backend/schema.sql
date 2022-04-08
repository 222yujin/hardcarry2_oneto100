DROP TABLE IF EXISTS `back_test`;

CREATE TABLE `back_test` (
                             `type_id`	VARCHAR(20)	NOT NULL,
                             `type_name`	VARCHAR(50)	NOT NULL,
                             `type_desc`	VARCHAR(200) NOT NULL,
                             `type_img`	VARCHAR(50) NOT	NULL,
                             `type_like`	VARCHAR(20) NOT	NULL,
                             `type_dislike`	VARCHAR(20) NOT	NULL,
                             `type_attend`	INT	NOT NULL DEFAULT 0,
                             PRIMARY KEY (type_id)
);

DROP TABLE IF EXISTS `back_diary`;

CREATE TABLE `back_diary` (
                              `diary_id`	VARCHAR(20)	NOT NULL,
                              `diary_writter`	VARCHAR(20) NOT	NULL,
                              `diary_content`	VARCHAR(500) NOT NULL,
                              `diary_like`	INT	NOT NULL DEFAULT 0,
                              `diary_date`	DATE	NOT NULL,
                              PRIMARY KEY (diary_id)
);

DROP TABLE IF EXISTS `back_diary_check`;

CREATE TABLE `back_diary_check` (
                                    `diary_id`	VARCHAR(20)	NOT NULL,
                                    `diary_checked`	VARCHAR(2)	NOT NULL,
                                    `diary_name`	VARCHAR(10)	NULL,
                                    `diary_phone`	VARCHAR(20)	NULL,
                                    FOREIGN KEY (diary_id) REFERENCES back_diary (diary_id) ON DELETE RESTRICT,
                                    PRIMARY KEY (diary_id)

);

DROP TABLE IF EXISTS `back_item`;

CREATE TABLE `back_item` (
                             `item_id`	VARCHAR(20)	NOT NULL,
                             `item_name`	VARCHAR(50) NOT NULL,
                             `item_desc`	VARCHAR(200) NOT NULL,
                             `item_img`	VARCHAR(50)	NOT NULL,
                             `item_voted`	INT	NOT NULL DEFAULT 0,
                             PRIMARY KEY (item_id)
);

CREATE TABLE `back_balance` (
                                `balance_id`	VARCHAR(20)	NOT NULL,
                                `balance_content`	VARCHAR(200) NOT NULL,
                                `balance_date`	DATE NOT NULL,
                                `balance_like`	INT	NOT NULL DEFAULT 0,
                                `balance_type`	VARCHAR(2)	NOT NULL,
                                PRIMARY KEY (balance_id)
);
show tables;


