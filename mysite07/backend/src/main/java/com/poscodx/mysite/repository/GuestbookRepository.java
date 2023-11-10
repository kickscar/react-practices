package com.poscodx.mysite.repository;

import java.util.List;

import com.poscodx.mysite.vo.GuestbookVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class GuestbookRepository {
	private final SqlSession sqlSession;

	public GuestbookRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	public List<GuestbookVo> findAll(Long no) {
		return sqlSession.selectList("guestbook.findAllByNo", no);
	}

	public Boolean insert(GuestbookVo vo) {
		return 1 == sqlSession.insert("guestbook.insert", vo);
	}
	
	public Boolean delete(GuestbookVo vo) {
		return 1 == sqlSession.delete("guestbook.delete", vo);
	}
}