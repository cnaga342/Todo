
"use client";
import React, { useEffect } from 'react';
import useStore from './store';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, fetchTasks } = useStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
