package com.example.demo.repository;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CardRepository {
	@Autowired
	private SqlSession sqlSession;
}
