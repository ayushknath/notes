import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import InputModal from "./components/InputModal";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [matchingNotes, setMatchingNotes] = useState([]);
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  function createNote(noteData) {
    setNotes((prevNotes) => {
      return (
        (currentNote &&
          prevNotes.map((prevNote) => {
            return prevNote.id === noteData.id
              ? {
                  ...prevNote,
                  noteTitle: noteData.noteTitle,
                  noteBody: noteData.noteBody,
                }
              : { ...prevNote };
          })) || [...prevNotes, noteData]
      );
    });
    discardNote();
  }

  function updateNote(noteId) {
    notes.forEach((note) => {
      if (note.id === noteId) {
        setCurrentNote({
          id: noteId,
          noteTitle: note.noteTitle,
          noteBody: note.noteBody,
        });
      }
    });
    setShowModal(true);
  }

  function deleteNote(noteId) {
    setNotes((prevNotes) => {
      return prevNotes.filter((prevNote) => prevNote.id !== noteId);
    });
  }

  function discardNote() {
    setShowModal(false);
    setCurrentNote(null);
  }

  function searchNote(query) {
    if (!query) {
      setMatchingNotes([]);
      return;
    }

    const tokens = query.toLowerCase().split(" ");
    const matchingNotesArr = [];

    notes.forEach((note) => {
      if (
        tokens.some(
          (token) =>
            note.noteTitle.toLowerCase().includes(token) ||
            note.noteBody.toLowerCase().includes(token)
        )
      ) {
        matchingNotesArr.push(note);
      }
    });
    setMatchingNotes(matchingNotesArr);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header searchNote={searchNote} />
      <CreateNote openModal={() => setShowModal(true)} />
      <Notes
        notes={(matchingNotes.length && matchingNotes) || notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
      {showModal && (
        <InputModal
          closeModal={discardNote}
          createNote={createNote}
          currentNote={currentNote}
        />
      )}
    </>
  );
};

export default App;
library.add(fas);
