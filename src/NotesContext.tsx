import React from 'react';

export interface NoteInterface {
  text: string,
  timestamp: Date
}

export const NotesContext = React.createContext<NoteInterface[]>([])
