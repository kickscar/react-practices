package kanbanboard.repository;

import java.util.List;

import kanbanboard.domain.Card;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class CardRepository {
	private final SqlSession sqlSession;

	public CardRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	public List<Card> findAll() {
		return sqlSession.selectList("card.findAll");
	}
}
