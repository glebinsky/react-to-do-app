import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Notes from './components/Notes/Notes'
import './App.css';
import { NotesContext } from './NotesContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do App</h2>
      </header>
      <main className="App-main">
        <NotesContext.Provider value={[]}>
          <Switch>
            <Route path='/'>
              <Notes />
            </Route>
          </Switch>
        </NotesContext.Provider>
      </main>
    </div>
  );
}

export default App;
