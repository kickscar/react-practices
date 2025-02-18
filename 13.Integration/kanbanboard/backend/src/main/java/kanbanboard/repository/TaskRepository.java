package kanbanboard.repository;

import java.util.HashMap;
import java.util.List;

import kanbanboard.domain.Task;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class TaskRepository {
	private final SqlSession sqlSession;

	public TaskRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	public List<Task> findAllByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findAllByCardNo", cardNo);
	}

	public Boolean insert(Task task) {
		return sqlSession.insert("task.insert", task) == 1;
	}

	public Boolean updateDone(Long no, String done) {
		return sqlSession.update("task.updateDone", new HashMap<String, Object>() {{
		    put("no", no);
		    put("done", done);
		}}) == 1;

	}

	public Boolean delete(Long no) {
		return sqlSession.delete("task.delete", no) == 1;		
	}
}
