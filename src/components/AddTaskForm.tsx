import React, { useState } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

const AddTaskForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default AddTaskForm;

