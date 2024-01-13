import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notes = () => {
  return (
    <section className="notes-grid">
      <div className="note">
        <h3>Note header</h3>
        <p>Note body</p>

        <div className="note-actions">
          <button className="note-delete">
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
          <button className="note-edit">
            <FontAwesomeIcon icon="fas fa-pen" />
          </button>
        </div>
      </div>
      <div className="note">
        <h3>Note header</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex
          suscipit tenetur porro omnis ut voluptates magnam illo? Animi, in!
        </p>

        <div className="note-actions">
          <button className="note-delete">
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
          <button className="note-edit">
            <FontAwesomeIcon icon="fas fa-pen" />
          </button>
        </div>
      </div>
      <div className="note">
        <h3>Note header</h3>
        <p>Note body</p>

        <div className="note-actions">
          <button className="note-delete">
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
          <button className="note-edit">
            <FontAwesomeIcon icon="fas fa-pen" />
          </button>
        </div>
      </div>
      <div className="note">
        <h3>Note header</h3>
        <p>Note body</p>

        <div className="note-actions">
          <button className="note-delete">
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
          <button className="note-edit">
            <FontAwesomeIcon icon="fas fa-pen" />
          </button>
        </div>
      </div>
      <div className="note">
        <h3>Note header</h3>
        <p>Note body</p>

        <div className="note-actions">
          <button className="note-delete">
            <FontAwesomeIcon icon="fas fa-trash" />
          </button>
          <button className="note-edit">
            <FontAwesomeIcon icon="fas fa-pen" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notes;
