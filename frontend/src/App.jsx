import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ListNotes from "./components/ListNotes";

import { fetchNotes, fetchNote, updateNote } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      current_note_id: 0,
      is_creating: true,
      is_featching: true,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await fetchNotes();
    this.setState({ notes: data });
  }

  handleItemClick(id) {
    this.setState((prevState) => {
      return { is_creating: false, current_note_id: id };
    });
  }

  handleAddNote() {
    this.setState((prevState) => {
      return { is_creating: true };
    });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs="10">
              <h1>RealTime Notes</h1>
            </Col>
            <Col xs="2">
              <Button varients="primary" onClick={this.handleAddNote}>
                Create a new notes
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <ListNotes
                notes={this.state.notes}
                handleItemClick={this.handleItemClick}
              />
            </Col>
            <Col xs="8">
              <p>Content/Editing here...</p>
              {this.state.is_creating
                ? "Creating Now..."
                : `Editing Note with id: ${this.state.current_note_id}`}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
