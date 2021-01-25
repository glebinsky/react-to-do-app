import React from 'react';

export interface NoteInterface {
  id: number,
  text: string,
  timestamp: Date
}

export interface NotesContextType {
  notes: NoteInterface[],
  addNote: (text:string) => void,
  deleteNote: (id:number) => void
}

export const NotesContext = React.createContext<NotesContextType>({
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
})
