import React from 'react';
import './Note.css';
import { NoteInterface } from '../../NotesContext'

const Note: React.FC<NoteInterface> = ({ text, timestamp }) => (
  <div className="Note" data-testid="Note">
    Note Component
  </div>
);

export default Note;
