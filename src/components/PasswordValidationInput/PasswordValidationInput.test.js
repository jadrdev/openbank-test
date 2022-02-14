import React from "react";

import PasswordValidationInput from "./PasswordValidationInput";
import { MAX_PASSWORD_LENGTH } from "views/PasswordCreationForm/PasswordCreationForm";
import { useState } from "react";
import { render, fireEvent } from "@testing-library/react";

function WrapperWithDefaultParams() {
  const [password, setPassword] = useState("");
  return (
    <PasswordValidationInput
      id="password-input"
      value={password}
      onChange={(e) => {
        if (e.target.value.length <= MAX_PASSWORD_LENGTH) {
          setPassword(e.target.value);
        }
      }}
      placeholder="contraseña"
    />
  );
}

describe("PasswordValidationInput", () => {
  it("updates the password on input change", () => {
    const component = render(<WrapperWithDefaultParams />);
    const input = component.container.querySelector("#password-input");
    fireEvent.change(input, { target: { value: "hola" } });
    expect(input.value).toBe("hola");
  });

  it("limits the input value to the maximum number of specified characters", () => {
    const component = render(<WrapperWithDefaultParams />);
    const input = component.container.querySelector("#password-input");
    fireEvent.change(input, { target: { value: "h".repeat(25) } });
    fireEvent.change(input, { target: { value: "h".repeat(26) } });
    fireEvent.change(input, { target: { value: "h".repeat(50) } });
    expect(input.value).toBe("h".repeat(MAX_PASSWORD_LENGTH));
  });

  it("shows the password when the show password button is clicked and hides it when its clicked another time", () => {
    const component = render(<WrapperWithDefaultParams />);
    const button = component.container.querySelector(".show-password-icon");
    const input = component.container.querySelector("#password-input");
    fireEvent.change(input, { target: { value: "hola".repeat(26) } });
    button.click();
    expect(input.type).toBe("text");
    button.click();
    expect(input.type).toBe("password");
  });
});
