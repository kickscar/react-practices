-- create table

CREATE TABLE IF NOT EXISTS `card` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `status` ENUM('ToDo', 'Doing', 'Done') NOT NULL,
  PRIMARY KEY (`no`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `task` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `done` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
  `card_no` INT NOT NULL,
  PRIMARY KEY (`no`),
  CONSTRAINT `fk_task_card`
    FOREIGN KEY (`card_no`)
    REFERENCES `card` (`no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- insert card
insert into card values(null, 'DB Scheme Design', '프로젝트 Database 논리 모델링 작업', 'ToDo');
insert into card values(null, 'Stroy Board 작성', '기능 기반의 화면 목업 작업', 'Done');
insert into card values(null, 'React Study', 'React.JS 공부 하기', 'Doing');
insert into card values(null, 'View Publishing', '화면 HTML CSS publishing 하기', 'ToDo');

-- insert task
insert into task values(null, '사용자 스토리 리스트업', 'Y', 2);
insert into task values(null, '개별 화면 목업', 'Y', 2);
insert into task values(null, '스터디 계획:책선정,목표과제선정', 'Y', 3);
insert into task values(null, '1주차 시행', 'N', 3);
insert into task values(null, '프로젝트 적용 - 프로토타입 작성', 'N', 3);
insert into task values(null, 'bootstarp 테마 찾기', 'N', 4);
insert into task values(null, '스토리 보드 화면에 맞게 수정', 'N', 4);



