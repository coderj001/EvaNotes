import React from "react";
import Note from "./Note";

import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ListNotes(props) {
  const { notes, handleItemClick } = props;
  let notes_list = notes.map((note) => {
    return (
      <ListGroupItem key={note.id} onClick={() => handleItemClick(note.id)}>
        <Note title={note.title}></Note>
      </ListGroupItem>
    );
  });
  return <ListGroup>{notes_list}</ListGroup>;
}
