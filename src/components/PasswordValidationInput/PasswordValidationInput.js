import React, { useState } from "react";

import { useUpdateScoreOnPasswordChange } from "./PasswordValidationInput.hooks";
import {
  getBackgroundColor,
  getFontSize,
} from "./PasswordValidationInput.utils";
import "./PasswordValidationInput.scss";
import showEyeIcon from "../../assets/icons/show-eye.svg";
import hideEyeIcon from "../../assets/icons/hide-eye.svg";

export default function PasswordValidationInput(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { style, setPasswordScore, ...otherProps } = props;
  const score = useUpdateScoreOnPasswordChange(otherProps.value);
  return (
    <div className="PasswordValidationInput">
      <input
        {...otherProps}
        type={isPasswordVisible ? "text" : "password"}
        style={{
          ...style,
          fontSize: getFontSize(otherProps.value, isPasswordVisible),
        }}
      ></input>
      <img
        src={isPasswordVisible ? hideEyeIcon : showEyeIcon}
        onClick={() => setIsPasswordVisible((isVisible) => !isVisible)}
        className="show-password-icon"
        alt="show-password-icon"
      ></img>
      <div
        className="password-score"
        style={{
          width: `calc(${Math.round(score)}% - 2px)`,
          backgroundColor: getBackgroundColor(score),
        }}
      ></div>
    </div>
  );
}
