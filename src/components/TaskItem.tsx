import React from 'react';
import type { Task } from '../types/Task';

type Props = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '1rem' }}>
        ❌
      </button>
    </li>
  );
};

export default TaskItem;


