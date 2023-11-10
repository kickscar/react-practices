package me.kickscar.kanbanboard.repository;

import me.kickscar.kanbanboard.vo.DeckVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Map;


@Repository
public class DeckRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<DeckVo> findAll() {
		return sqlSession.selectList("deck.findAll");
	}

    public void updateOrderNos(Map moving) {
		sqlSession.update("deck.updateOrderNos", moving);
    }

	public void updateOrderNo(Map moving) {
		sqlSession.update("deck.updateOrderNo", moving);
	}
}
