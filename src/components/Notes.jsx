import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notes = ({ notes, updateNote, deleteNote }) => {
  return (
    <section className="notes-grid">
      {notes.length ? (
        notes.map((note) => (
          <div key={note.id} className="note">
            <h3>{note.noteTitle}</h3>
            <p>{note.noteBody}</p>

            <div className="note-actions">
              <button
                className="note-delete"
                onClick={() => deleteNote(note.id)}
              >
                <FontAwesomeIcon icon="fas fa-trash" />
              </button>
              <button className="note-edit" onClick={() => updateNote(note.id)}>
                <FontAwesomeIcon icon="fas fa-pen" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="notes-grid-empty">No notes present</p>
      )}
    </section>
  );
};

export default Notes;
