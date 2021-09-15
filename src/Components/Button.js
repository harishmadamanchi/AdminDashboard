import React from "react";

export default function Button(props) {
  const buttonStyle = "m-1 btn " + `btn-${props.buttonStyle}`;
  return (
    <div>
      <button className={buttonStyle}>{props.children}</button>
    </div>
  );
}
