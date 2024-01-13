import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNote = () => {
  return (
    <button className="create-note">
      <FontAwesomeIcon icon="fas fa-pen" />
      Write a note
    </button>
  );
};

export default CreateNote;
