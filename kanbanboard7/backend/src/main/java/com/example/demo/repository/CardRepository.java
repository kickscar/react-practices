package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.CardVo;

@Repository
public class CardRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<CardVo> findAll() {
		return sqlSession.selectList("card.findAll");
	}
}
