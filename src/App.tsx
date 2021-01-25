import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Notes from './components/Notes/Notes'
import './App.css';
import {
  NotesContext,
  NotesContextType,
  NoteInterface
} from './NotesContext'

function App() {
  const [state, setState] = React.useState<NotesContextType>({
    notes: [],
    addNote,
    deleteNote,
  })

  function* idMaker() {
    let i = 0
    while(true) yield i++
  }
  const idGenerator = idMaker()

  function addNote(text: string) {
    setState(prevState => ({
      ...prevState ,
      notes: Array.prototype.concat(prevState.notes, [{
        id: idGenerator.next().value,
        text,
        timestamp: Date.now()
      }])
    }))
  }

  function deleteNote(id: number) {
    setState(prevState => ({
      ...prevState,
      notes: prevState.notes.filter(n => n.id !== id)
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do App</h2>
      </header>
      <main className="App-main">
        <NotesContext.Provider value={state}>
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
