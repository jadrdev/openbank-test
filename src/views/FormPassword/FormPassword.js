import React, { useState } from 'react'
import PasswordValidationInput from "../../components/PasswordValidationInput/PasswordValidationInput";

import "./FormPassword.scss";

export default function FormPassword() {
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    return (
        <div className="PasswordCreationForm">
            <div>
                En primer lugar, debes crear una contraseña diferente para sus
                pertenencias electrónicas. No podrás recuperar tu contraseña, así que
                recuérdala bien.
            </div>
            <div className="password-form">
                <div className="column">
                    <strong>Crea tu Contraseña Maestra</strong>
                    <PasswordValidationInput
                        value={firstPassword}
                        onChange={(e) => setFirstPassword(e.target.value)}
                        placeHolder="Introduce tu contraseña"
                    />
                </div>
                <div className="column">
                    <strong>Repite tu Contraseña Maestra</strong>
                    <PasswordValidationInput
                        value={secondPassword}
                        setValue={setSecondPassword}
                        onChange={(e) => setSecondPassword(e.target.value)}
                        placeHolder="Repite tu contraseña"
                    />
                </div>
            </div>
        </div>
    )
}


