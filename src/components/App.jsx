import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
//import notes from '../notes';
import CreateArea from './CreateArea';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(noteContent) {
    setNotes((prevValue) => {
      return [...prevValue, noteContent];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note.key !== id;
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map( note => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
