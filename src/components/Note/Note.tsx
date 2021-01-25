import React from 'react';
import './Note.css';
import { NoteInterface, NotesContext } from '../../NotesContext'

const Note = (props: { item: NoteInterface }) => {
  const { item } = props
  const { deleteNote } = React.useContext(NotesContext)

  return (
    <div className="Note" data-testid="Note">
      <span className="NoteText">{item.text}</span>
      <span className="NoteDate">{new Intl.DateTimeFormat('en-us').format(item.timestamp)}</span>
      <button className="NoteDelete" onClick={() => deleteNote(item.id)}>delete</button>
    </div>
  )
}

export default Note;
