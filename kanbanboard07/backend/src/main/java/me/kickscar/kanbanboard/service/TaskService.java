package me.kickscar.kanbanboard.service;

import me.kickscar.kanbanboard.repository.DeckRepository;
import me.kickscar.kanbanboard.repository.TaskRepository;
import me.kickscar.kanbanboard.vo.DeckVo;
import me.kickscar.kanbanboard.vo.TaskVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public void insert(TaskVo taskVo) {
        taskRepository.insert(taskVo);
    }

    public void updateDone(Long no, String done) {
        taskRepository.updateDone(no, done);
    }

    public List<TaskVo> findAllByCardNo(Long cardNo) {
        return taskRepository.findAllByCardNo(cardNo);
    }
}
