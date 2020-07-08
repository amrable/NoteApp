import React , {useState} from "react";
import CreateArea from './CreateArea';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';

function Note(props) {  

  const [open , setOpen]= useState(false);

  function handleOpen(){
    setOpen(true);
  }
  function handleSave(note){
    props.onEdit(props.id , note.title , note.completed);
    setOpen(false);
  }

  function handleClose(note){
    setOpen(false);
  }
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.completed}</p>
      <button className="btnicon" onClick={handleClick}><DeleteIcon color="secondary"></DeleteIcon></button>
      <button className="btnicon" onClick={handleOpen}><EditIcon color="primary"></EditIcon></button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
        <div>
          <CreateArea onAdd={handleSave} data={{title: props.title , completed: props.completed }}></CreateArea>
        </div>
        </Modal>
    </div>
  );
}

export default Note;
