import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  console.log(props);
  
  const [note, setNote] = useState({
    title: props.data.title,
    completed: props.data.completed
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      completed: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="completed"
          onChange={handleChange}
          value={note.completed}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="btnicon" onClick={submitNote}><AddIcon></AddIcon></button>
      </form>
    </div>
  );
}

export default CreateArea;
