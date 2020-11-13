import React from "react";
import { Button, Form, Card } from "react-bootstrap";

export default function EditNote(props) {
  const { handleChange, note } = props;
  return (
    <>
      <Form>
        <Card body>
          <Form.FormGroup>
            <Card.Title>{note.title}</Card.Title>
            <Form.Control
              as="textarea"
              rows={4}
              name="content"
              value={note.context}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Enter content for the note.
            </Form.Text>
          </Form.FormGroup>
          <Button variant="outline-success" size="lg" type="submit">
            Update
          </Button>
        </Card>
      </Form>
    </>
  );
}
