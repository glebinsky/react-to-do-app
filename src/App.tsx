import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Notes from './components/Notes/Notes.lazy'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do App</h2>
      </header>
      <main className="App-main">
        <Switch>
          <Route path='/'>
            <Notes />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
