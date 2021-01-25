import React, { useState } from 'react';
import './AddNote.css';
import {
  NotesContext,
  NoteInterface
} from '../../NotesContext'

const AddNote = (props: { cancel: Function }) => {

  const { addNote } = React.useContext(NotesContext)
  const { cancel } = props
  const [note, setNote] = useState('')

  function addNoteHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addNote(note)
    cancel()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNote(event.target.value)
  }

  return (
    <form className="AddNote" data-testid="AddNote" onSubmit={addNoteHandler}>
      <label htmlFor="text" className="AddNoteLabel">note:</label>
      <input type="text" name="text" className="AddNoteText" value={note} onChange={handleChange} />
      <input type="submit" className="AddNoteSubmit" value="Add" />
      <button className="AddNoteCancel" onClick={() => cancel()}>cancel</button>
    </form>
  )
}

export default AddNote;
