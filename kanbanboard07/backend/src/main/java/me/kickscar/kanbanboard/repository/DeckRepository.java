package me.kickscar.kanbanboard.repository;

import me.kickscar.kanbanboard.vo.DeckVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public class DeckRepository {
	@Autowired
	private SqlSession sqlSession;

	public List<DeckVo> findAll() {
		return sqlSession.selectList("deck.findAll");
	}

}
