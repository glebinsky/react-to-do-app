import React, { useState } from 'react';
import './AddNote.css';

const AddNote: React.FC = () => {

  const [note, setNote] = useState('')

  function addNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNote(event.target.value)
  }

  return (
    <form className="AddNote" data-testid="AddNote" onSubmit={addNote}>
      <input type="text" value={note} onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  )
}

export default AddNote;
