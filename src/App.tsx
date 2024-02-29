import { useState } from "react";

import styles from "./App.module.css";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal";

// Interfaces
import { ITask } from "./interfaces/Task";
const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id != id));
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask) => {
    hideOrShowModal(true);
    setTaskUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    hideOrShowModal(false);
  };
  return (
    <div className={styles.app}>
      <Modal
        children={
          <TaskForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskUpdate}
            handleUpdateTask={updateTask}
          />
        }
      />
      <Header />

      <div className={styles.content}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDeleteTask={deleteTask}
            handleEditTask={editTask}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
