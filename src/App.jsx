import { useState } from "react";

import "./App.css";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import SearchBar from "./components/SearchBar";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import LogoMobile from "./assets/logo-mobile.svg";

const App = () => {
  const [createNote, setCreateNote] = useState(false);
  const [sendNoteId, setSendNoteId] = useState(undefined);

  const storedNotes = localStorage.getItem("notes");
  const notes = storedNotes ? JSON.parse(storedNotes) : [];
  const [notesQuantity, setNotesQuantity] = useState(notes.length);
  const noteGrid = notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      head={note.head}
      body={note.body}
      edit={editNote}
      noteDelete={deleteNote}
      highlight={note.highlight}
    />
  ));

  function saveNote(noteId = undefined) {
    const noteObj = {};
    const noteHead = document.getElementById("note-header").value;
    const noteBody = document.getElementById("note-body").value;

    if (!noteId) {
      noteObj.id = notes.length + 1;
      noteObj.head = noteHead;
      noteObj.body = noteBody;
      notes.push(noteObj);
      setNotesQuantity(notes.length);
    } else {
      notes[noteId - 1].head = noteHead;
      notes[noteId - 1].body = noteBody;
      setSendNoteId(undefined);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    discardNote();
  }

  function discardNote() {
    setCreateNote(false);
    setSendNoteId(undefined);
  }

  function editNote(noteId) {
    const index = noteId - 1;

    setSendNoteId(noteId);
    setCreateNote(true);

    setTimeout(() => {
      const noteHead = document.getElementById("note-header");
      const noteBody = document.getElementById("note-body");
      noteHead.value = notes[index].head;
      noteBody.value = notes[index].body;
    }, 1);
  }

  function deleteNote(noteId) {
    const index = noteId - 1;
    const updatedNotes = notes.filter((note) => note.id !== noteId);

    for (let i = index; i < updatedNotes.length; i++) {
      updatedNotes[i].id = i + 1;
    }

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotesQuantity(updatedNotes.length);
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoMobile} alt="Notes logo" />
        </div>

        <SearchBar />
      </header>

      <main id="note-section">
        <div className="note-initialiser" onClick={() => setCreateNote(true)}>
          <FontAwesomeIcon icon="fa-solid fa-pen" />
          Write a note
        </div>

        <div className="note-grid">
          {notesQuantity ? (
            noteGrid
          ) : (
            <p id="note-grid-empty">No notes present</p>
          )}
        </div>
      </main>

      {createNote && (
        <>
          <div className="overlay" onClick={discardNote}></div>
          <CreateNote
            save={saveNote}
            discard={discardNote}
            noteId={sendNoteId}
          />
        </>
      )}
    </>
  );
};

export default App;
library.add(fas);
