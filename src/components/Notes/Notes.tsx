import React from 'react';
import './Notes.css';
import AddNote from '../AddNote/AddNote.lazy'
import {
  NotesContext,
  NoteInterface
} from '../../NotesContext'
import Note from '../Note/Note.lazy'

const Notes: React.FC = () => {
  const { notes } = React.useContext(NotesContext)
  const [addingNote, setAddingNote] = React.useState(false)

  function addNote() {
    setAddingNote(true)
  }

  function cancelAddNote() {
    setAddingNote(false)
  }

  return (
    <section className="Notes" data-testid="Notes">
      <div className="NotesHeader">
        <h4 className="NotesTitle">Notes</h4>
      </div>
      <div className="NotesItems">
        { notes.length > 0 && notes.map((item: NoteInterface) => <Note item={item} key={item.id} />) }
        { !addingNote && <h5 className="NotesAddNote" onClick={addNote}>+ add note</h5> }
        { addingNote && <AddNote cancel={cancelAddNote} /> }
      </div>
    </section>
  )
}

export default Notes;
