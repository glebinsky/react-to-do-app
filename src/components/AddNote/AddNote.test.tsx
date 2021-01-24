import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddNote from './AddNote';

describe('<AddNote />', () => {
  test('it should mount', () => {
    render(<AddNote />);
    
    const addNote = screen.getByTestId('AddNote');

    expect(addNote).toBeInTheDocument();
  });
});