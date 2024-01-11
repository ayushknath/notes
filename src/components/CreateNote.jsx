const CreateNote = ({ save, noteId }) => {
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
        <button
          type="button"
          className="save-note"
          onClick={() => save(noteId)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
