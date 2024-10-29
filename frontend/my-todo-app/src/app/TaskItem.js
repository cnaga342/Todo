// components/TaskItem.js
import React from 'react';
import useStore from './store';

const TaskItem = ({ task }) => {
  const { deleteTask } = useStore();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="task-item flex justify-between p-4 border-b">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div>
        <button onClick={handleDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
