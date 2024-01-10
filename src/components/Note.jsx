import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Note = ({ id, head, body, edit, noteDelete, highlight }) => {
  const [noteId, setNoteId] = useState(id);

  function handleOnClickEdit() {
    edit(noteId);
  }

  function handleOnClickDelete() {
    noteDelete(noteId);
  }

  return (
    <div className={`note ${highlight ? "highlight" : ""}`}>
      <h1>{head}</h1>
      <p>{body}</p>

      <div className="note-actions">
        <FontAwesomeIcon
          icon="fa-solid fa-trash"
          onClick={handleOnClickDelete}
        />
        <FontAwesomeIcon icon="fa-solid fa-pen" onClick={handleOnClickEdit} />
      </div>
    </div>
  );
};

export default Note;
