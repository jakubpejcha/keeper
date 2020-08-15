import React, {useState} from "react"
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {

  const emptyNote = {
    key: uuidv4(),
    title: '',
    content: ''
  };

  const [noteContent, setNoteContent] = useState(emptyNote);

  function handleChage(event) {
    const {value, name} = event.target;

    setNoteContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (noteContent.title !== "" || noteContent.content !== "") {
      props.onAdd(noteContent);
      setNoteContent(emptyNote);
    }
  }


  return (
    <div>
      <form>
        <input
          onChange={handleChage}
          name="title"
          placeholder="Title"
          value={noteContent.title}
        />
        <textarea
          onChange={handleChage}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
