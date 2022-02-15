import React from "react";

import "./CenteredAlert.scss";

export default function CenteredAlert(props) {
  const { children, ...otherProps } = props;
  return (
    <div className="CenteredAlert" {...otherProps}>
      <div className="content-container">{children}</div>
    </div>
  );
}
