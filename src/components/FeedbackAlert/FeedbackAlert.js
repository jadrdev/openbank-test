import React from "react";

import "./FeedbackAlert.scss";

export default function FeedbackAlert(props) {
  const { iconImage, label, description, onButtonClick, buttonText } = props
  return (
    <div className="FeedbackAlert">
      <div className="row">
        <img
          className="icon"
          src={iconImage}
          alt="feedback-alert-icon"
        ></img>
        <div className="column">
          <div className="label">{label}</div>
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom-button-container">
        <button className="tertiary" onClick={onButtonClick}>
          {buttonText}
          <div style={{ fontSize: "2em", marginLeft: "10px" }}>&rsaquo;</div>
        </button>
      </div>
    </div>
  );
}
