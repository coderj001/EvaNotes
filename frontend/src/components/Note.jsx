import React from "react";

export default function Note({ title }) {
  return (
    <React.Fragment>
      <b>{title}</b>
    </React.Fragment>
  );
}
