import { useState, useEffect, ChangeEvent, FormEvent, Dispatch } from "react";

import styles from "./TaskForm.module.css";

// Interface
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  task?: ITask | null;
  setTaskList?: Dispatch<React.SetStateAction<ITask[]>>;
  handleUpdateTask?: (id: number, title: string, difficulty: number) => void;
}

const TaskForm = ({
  btnText,
  taskList,
  task,
  setTaskList,
  handleUpdateTask,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdateTask) {
      handleUpdateTask(id, title, difficulty);
    } else {
      setId(Math.floor(Math.random() * 10000));
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(Number(e.target.value));
    }
  };

  return (
    <form onSubmit={handleAddTask} className={styles.form}>
      <div>
        <label>
          <span>Tarefa:</span>
          <input
            type="text"
            name="title"
            placeholder="Sua tarefa"
            required
            value={title}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          <span>Dificuldade:</span>
          <input
            type="number"
            name="difficulty"
            placeholder="Dificuldade da tarefa"
            required
            value={difficulty > 0 ? difficulty : ""}
            onChange={handleChange}
            max={10}
            min={1}
          />
        </label>
      </div>

      <input className={styles.submit} type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
