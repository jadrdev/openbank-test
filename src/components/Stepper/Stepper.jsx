import React, { createRef } from "react";
import { useMemo } from "react";

import Steps from "./Steps";
import { useGetPointerLeftPositionOnStepChange } from "../../hooks/useStepper";

import "./Stepper.scss";

export default function Stepper(props) {
  const indicatorRefs = useMemo(() => {
    return props.steps.map(() => createRef());
  }, [props.steps]);
  const pointerLeftPosition = useGetPointerLeftPositionOnStepChange(
    indicatorRefs[props.activeStepIndex]
  );
  return (
    <div className="Stepper">
      <div className="steps-container">
        <Steps {...props} {...{ indicatorRefs }} />
        <div className="pointer" style={{ left: pointerLeftPosition }}></div>
      </div>
      {props.children}
    </div>
  );
}
