import { useState, useEffect, ChangeEvent, FormEvent, Dispatch } from "react";

import styles from "./TaskForm.module.css";

// Interface
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 10000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    console.log(taskList);

    setTitle("");
    setDifficulty(0);
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
          />
        </label>
      </div>

      <input className={styles.submit} type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
