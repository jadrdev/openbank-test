import React, { Fragment } from "react";

function getClassName(index, activeStepIndex) {
  if (activeStepIndex > index) {
    return (
      "step-indicator" +
      (activeStepIndex === index ? "active passed" : " passed")
    );
  }
  return "step-indicator" + (activeStepIndex === index ? "-active" : "");
}

export default function Steps(props) {
  return props.steps.map((step, index) => (
    <Fragment key={index}>
      <div
        ref={props.indicatorRefs[index]}
        className={getClassName(index, props.activeStepIndex)}
      >
        {props.activeStepIndex > index ? "✓" : step}
      </div>
      {index + 1 !== props.steps.length ? (
        <div className="step-separator"></div>
      ) : null}
    </Fragment>
  ));
}
