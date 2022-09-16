package me.kickscar.kanbanboard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import me.kickscar.kanbanboard.vo.CardVo;

@Repository
public class CardRepository {
	@Autowired
	private SqlSession sqlSession;

	public void updateOrderNo(Map moving) {
		sqlSession.update("card.updateOrderNo", moving);
	}

	public void updateOrderNos(Map moving) {
		sqlSession.update("card.updateOrderNos", moving);
	}

}
