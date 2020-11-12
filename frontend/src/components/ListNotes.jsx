import React from "react";

import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ListNotes(props) {
  const { notes, handleItemClick } = props;
  let notes_list = notes.map((note) => {
    return (
      <ListGroupItem key={note.id} onClick={() => handleItemClick(note.id)}>
        <p>{note.title}</p>
      </ListGroupItem>
    );
  });
  return <ListGroup>{notes_list}</ListGroup>;
}
