import React, { lazy, Suspense } from 'react';

const LazyAddNote = lazy(() => import('./AddNote'));

const AddNote = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAddNote {...props} />
  </Suspense>
);

export default AddNote;
