import React, { Fragment, Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSaveNote(this.state);
    this.setState({
      title: "",
      content: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Form.Text className="text-muted">
              Enter title for the note.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <Form.Text className="text-muted">
              Enter content for the note.
            </Form.Text>
          </Form.Group>

          <Button varient="outline-success" size="lg">
            Save
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default AddNotes;
