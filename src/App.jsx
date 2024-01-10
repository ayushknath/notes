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
  const [notesQuantity, setNotesQuantity] = useState(-1);
  const [noteGridArr, setNoteGridArr] = useState([]);

  const storedNotes = localStorage.getItem("notes");
  const notes = storedNotes ? JSON.parse(storedNotes) : [];
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
    let noteExists = false;
    const noteObj = {};
    const noteHead = document.getElementById("note-header").value;
    const noteBody = document.getElementById("note-body").value;

    notes.forEach((note) => {
      if (note.id === noteId) {
        noteExists = true;
        setSendNoteId(undefined);
        note.head = noteHead;
        note.body = noteBody;
      }
    });

    if (!noteExists) {
      noteObj.id = notes.length + 1;
      noteObj.head = noteHead;
      noteObj.body = noteBody;

      notes.push(noteObj);
      setNotesQuantity(notes.length);
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    discardNote();
  }

  function discardNote() {
    setCreateNote(false);
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
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    updatedNotes.forEach((note, index) => {
      note.id = index + 1;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotesQuantity(updatedNotes.length);
  }

  function searchNote(value) {
    // const tokens = value.toLowerCase().split(" ");
    // const updatedNotesGrid = notes.map((note) => {
    //   const noteMatches = tokens.every((token) => {
    //     note.head.toLowerCase().includes(token) ||
    //       note.body.toLowerCase().includes(token);
    //   });
    //   return {
    //     ...note,
    //     highlight: noteMatches,
    //   };
    // });
  }

  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoMobile} alt="" />
        </div>

        <SearchBar search={searchNote} />
      </header>

      <section id="note-section">
        <div className="note-initialiser" onClick={() => setCreateNote(true)}>
          <FontAwesomeIcon icon="fa-solid fa-pen" />
          Write a note
        </div>

        <div className="note-grid">{notesQuantity ? noteGrid : ""}</div>
      </section>

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
