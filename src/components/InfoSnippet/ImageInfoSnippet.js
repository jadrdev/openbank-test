import React from "react";

import "./ImageInfoSnippet.scss";

export default function ImageInfoSnippet(props) {
  const {style,imageSource, imageStyle, imageAlt, infoSnippet} = props
  return (
    <div className="ImageInfoSnippet" style={style}>
      <img
        src={imageSource}
        style={imageStyle}
        alt={imageAlt}
      ></img>
      <div className="centered-text info-snippet">{infoSnippet}</div>
    </div>
  );
}
