import React from "react";
import { useGetResponseStatus } from "../../hooks/useGetResponseStatus";
import CenteredAlert from "../../components/CenteredAlert/CenteredAlert";
import FeedbackAlert from "../../components/FeedbackAlert/FeedbackAlert";
import problemIcon from "../../assets/icons/problem-icon.png";
import okIcon from "../../assets/icons/ok-icon.png";

export default function Feedback(props) {
    const status = useGetResponseStatus(
        props.password,
        props.repeatedPassword,
        props.clue
    );
    return (
        <CenteredAlert id="Feedback">
            {status === undefined ? <div className="loading-spinner"></div> : null}
            {status === 200 ? (
                <FeedbackAlert
                    label="¡Tu Password Manager ya está creado!"
                    description="Ya puedes utilizar el servicio y guardar todas tus contraseñas en un mismo lugar"
                    iconImage={okIcon}
                    buttonText="Acceder "
                    onButtonClick={props.resetForm}
                />
            ) : null}
            {status === 401 ? (
                <FeedbackAlert
                    label="Ha habido un error"
                    description="No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde"
                    iconImage={problemIcon}
                    buttonText="Volver a Password Manager "
                    onButtonClick={props.resetForm}
                />
            ) : null}
        </CenteredAlert>
    );
}
