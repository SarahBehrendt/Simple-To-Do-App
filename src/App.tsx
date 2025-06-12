import React, { useState, useEffect } from 'react';
import type { Task } from './types/Task';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Tasks vom Server laden
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Fehler beim Laden der Tasks:', err));
  }, []);

  // Neue Aufgabe hinzufügen (POST)
  const addTask = async (text: string) => {
    const newTask = {
      text,
      completed: false,
    };

    try {
      const res = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      const savedTask = await res.json();
      setTasks((prev) => [...prev, savedTask]);
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error);
    }
  };

  // Task-Status toggeln (PATCH)
  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed }),
      });
      const updatedTask = await res.json();
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? updatedTask : t))
      );
    } catch (error) {
      console.error('Fehler beim Aktualisieren:', error);
    }
  };

  // Task löschen (DELETE)
  const deleteTask = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Fehler beim Löschen:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>📝 To-Do Liste</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;

