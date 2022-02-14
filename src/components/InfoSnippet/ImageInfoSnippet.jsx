import React from "react";

import "./ImageInfoSnippet.scss";

export default function ImageInfoSnippet(props) {
  return (
    <div className="ImageInfoSnippet" style={props.style}>
      <img
        src={props.imageSource}
        style={props.imageStyle}
        alt={props.imageAlt}
      ></img>
      <div className="centered-text info-snippet">{props.infoSnippet}</div>
    </div>
  );
}
