import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import CircularProgress from '@material-ui/core/CircularProgress';

function Home() {
  
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          
          setIsLoaded(true);
          setNotes(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id , title , content) {
    setNotes(prevNotes => {
      
      return prevNotes.map((noteItem, index) => {
        if (index === id){
          noteItem.title = title;
          noteItem.completed = content;
          console.log(noteItem);
        }
        return noteItem;
      });
    });
    console.log("hola");

  }

  let body ;
  if (error) {
    body = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    body = <div className="note" > <CircularProgress disableShrink className='center'/></div>;
  } else {
    body =  notes.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          completed={noteItem.completed}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      );
    })
    
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} data={{title: "" , completed: "" }}/>
      {body}
      <Footer />
    </div>
  );
}

export default Home;
