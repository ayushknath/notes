import { useState } from "react";

const CreateNote = ({ save, discard, noteId }) => {
  function handleOnClick() {
    save(noteId);
  }

  return (
    <div id="create-note">
      <input
        type="text"
        name="note-header"
        id="note-header"
        placeholder="Heading"
      />
      <textarea
        name="note-body"
        id="note-body"
        placeholder="Your note..."
      ></textarea>

      <div className="note-actions create-actions">
        <div>
          <button type="button" className="discard-note" onClick={discard}>
            Discard
          </button>
          <button type="button" className="save-note" onClick={handleOnClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
