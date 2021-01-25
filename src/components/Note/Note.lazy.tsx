import React, { lazy, Suspense } from 'react';
import { NoteInterface } from '../../NotesContext'

const LazyNote = lazy(() => import('./Note'));

const Note = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; item: NoteInterface; }) => (
  <Suspense fallback={null}>
    <LazyNote {...props} />
  </Suspense>
);

export default Note;
