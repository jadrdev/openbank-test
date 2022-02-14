import React from 'react'

import ImageInfoSnippet from "../../components/InfoSnippet/ImageInfoSnippet";

import "./ProductInformation.scss";
import mindImage from "../../assets/img/group.svg";
import safeImage from "../../assets/img/group-3.svg";
import InfoSnippet from "../../components/InfoSnippet/InfoSnippet";

export default function ProductInformation() {
    return (
        <div className="ProductInformation">
            <div className="first-two-info-snippets">
                <ImageInfoSnippet
                    style={{ width: "40%" }}
                    imageSource={mindImage}
                    imageAlt={"mind-openbank"}
                    infoSnippet="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas"
                />
                <ImageInfoSnippet
                    style={{ width: "40%" }}
                    imageSource={safeImage}
                    imageAlt="safe-openbank"
                    infoSnippet="Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella."
                />
            </div>
            <InfoSnippet
                label="Cómo funciona"
                description="En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuerdala bien"
            />
            <InfoSnippet
                label="Qué datos puedes guardar"
                description="Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro."
            />
        </div>
    )
}
