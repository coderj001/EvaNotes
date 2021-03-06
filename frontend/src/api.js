const url = "http://localhost:8000/api/notes/";

export const fetchNotes = async () => {
  return fetch(url, {})
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const fetchNote = async (id) => {
  return fetch(`${url + id}`, {})
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const addNote = (note) => {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return note;
};

export const updateNote = (note) => {
  console.log("We are updating....");
  console.log("Update a note with id", note.id);
};
