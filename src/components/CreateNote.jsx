import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNote = ({ openModal }) => {
  return (
    <button className="create-note" onClick={openModal}>
      <FontAwesomeIcon icon="fas fa-pen" />
      Write a note
    </button>
  );
};

export default CreateNote;
