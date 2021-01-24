import React from 'react';
import styles from './Notes.module.css';
import AddNote from '../AddNote/AddNote'
import { NotesContext } from '../../NotesContext'
import Note from '../Note/Note'

const Notes: React.FC = () => {
  const notes = React.useContext(NotesContext)
  const [addingNote, setAddingNote] = React.useState(false)

  return (
    <section className={styles.Notes} data-testid="Notes">
      <div className={styles.NotesHeader}>
        <h4 className={styles.NotesTitle}>Notes</h4>
      </div>
      <div className={styles.Items}>
        { notes.length === 0 && 'No notes entered' }
        { notes.length && notes.map(item => <Note item={item} />) }
        { addingNote && <AddNote /> }
      </div>
    </section>
  )
}

export default Notes;
