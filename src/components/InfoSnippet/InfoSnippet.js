import React from "react";

import "./InfoSnippet.scss";

export default function InfoSnippet(props) {
  const {style, label, description } = props
  return (
    <div className="InfoSnippet" style={style}>
      <div className="label">{label}</div>
      <div className="description"> {description}</div>
    </div>
  );
}
