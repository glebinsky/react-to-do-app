import React, { lazy, Suspense } from 'react';

const LazyNote = lazy(() => import('./Note'));

const Note = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNote {...props} />
  </Suspense>
);

export default Note;
