import styles from "./TaskList.module.css";

// Interfaces
import { ITask } from "../../interfaces/Task";

// icons
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";

interface Props {
  taskList: ITask[];
  handleDeleteTask: (id: number) => void;
  handleEditTask: (task: ITask) => void;
}

const TaskList = ({ taskList, handleDeleteTask, handleEditTask }: Props) => {
  return (
    <div className={styles.task_list}>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.task_details}>
              <h3>{task.title}</h3>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.task_buttons}>
              <button
                onClick={() => handleEditTask(task)}
                className={styles.edit}
              >
                <MdOutlineEdit />
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className={styles.delete}
              >
                <LuTrash2 />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas.</p>
      )}
    </div>
  );
};

export default TaskList;
