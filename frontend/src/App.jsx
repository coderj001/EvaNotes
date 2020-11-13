import React, { Component } from "react";

import { Navbar, Button, Container, Row, Col } from "react-bootstrap";

import ListNotes from "./components/ListNotes";
import AddNotes from "./components/AddNote";
import EditNote from "./components/EditNote";

import { fetchNotes, fetchNote, updateNote, addNote } from "./api";

import Websocket from "react-websocket";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      note: {},
      current_note_id: 0,
      is_creating: true,
      is_featching: true,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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

  async handleSaveNote(data) {
    await addNote(data);
    await this.getData();
  }

  handleData(data) {
    let result = JSON.parse(data);
    let current_note = this.state.note;
    if (current_note.id === result.id) {
      this.setState({ note: result });
    }
  }

  handleOnChange(e) {
    let content = e.target.value;
    let current_note = this.state.note;
    current_note.content = content;
    this.setState({
      note: current_note,
    });
    const socket = this.refs.socket;
    socket.state.ws.send(JSON.stringify(current_note));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">EvaNotes</Navbar.Brand>
          </Navbar>
          <Row>
            <Col xs="10">
              <h1>RealTime Notes</h1>
            </Col>
            <Col xs="2">
              <Button variant="primary" onClick={this.handleAddNote}>
                Create New Note
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
              <h4>Content/Editing Here</h4>
              {this.state.is_creating ? (
                <AddNotes handleSaveNote={this.handleSaveNote} />
              ) : (
                <EditNote
                  handleChange={this.handleOnChange}
                  note={this.state.note}
                />
              )}
              <Websocket
                url="ws://localhost:8000/ws/notes"
                onMessage={this.handleData.bind(this)}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
