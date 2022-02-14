import React from "react";

import "./InfoSnippet.scss";

export default function InfoSnippet(props) {
  return (
    <div className="InfoSnippet" style={props.style}>
      <div className="label">{props.label}</div>
      <div className="description"> {props.description}</div>
    </div>
  );
}
