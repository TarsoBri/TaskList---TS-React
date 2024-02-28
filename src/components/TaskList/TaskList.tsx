import styles from "./TaskList.module.css";

// Interfaces
import { ITask } from "../../interfaces/Task";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <div className={styles.task_list}>
      {taskList.length > 0 &&
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <h3>{task.title}</h3>
            <p>Dificuldade: {task.difficulty}</p>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
