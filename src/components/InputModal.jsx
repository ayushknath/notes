import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const InputModal = ({ closeModal, createNote, currentNote }) => {
  const id = nanoid();
  const [noteData, setNoteData] = useState({
    id: id,
    noteTitle: "",
    noteBody: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteData((prevNoteData) => {
      return {
        ...prevNoteData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (currentNote) {
      setNoteData((prevNoteData) => {
        return {
          ...prevNoteData,
          id: currentNote.id,
          noteTitle: currentNote.noteTitle,
          noteBody: currentNote.noteBody,
        };
      });
    }
  }, []);

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="note-input-modal">
        <input
          type="text"
          name="noteTitle"
          placeholder="Enter title"
          onChange={handleChange}
          value={noteData.noteTitle}
        />
        <textarea
          name="noteBody"
          placeholder="Your note..."
          onChange={handleChange}
          value={noteData.noteBody}
        />

        <div className="note-actions">
          <button onClick={() => createNote(noteData)}>Save</button>
        </div>
      </div>
    </>
  );
};

export default InputModal;
