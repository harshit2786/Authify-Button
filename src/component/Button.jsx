/* eslint-disable react/prop-types */
import { useState } from "react";
import { loginWithMicrosoft } from "./AuthHandler";
import "./styles.css";

const Button = ({
  id,
  handler,
  disabled = false,
  completeLoad = false,
  startContent,
  endContent,
  text = "",
  buttonStyle = {},
  buttonClassName = "",
  textClassName = "",
  textStyle = {},
  authOrigin,
}) => {
  const [loadOnDone, setLoadOnDone] = useState(false);
  const [loader, setLoader] = useState(false);
  const authHandler = async () => {
    if (disabled || loadOnDone || loader || !authOrigin) {
      return;
    }
    await loginWithMicrosoft(id, handler, setLoader, authOrigin,completeLoad,setLoadOnDone);
  };
  return (
    <button
      className={buttonClassName}
      disabled={disabled || loadOnDone || loader}
      onClick={authHandler}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        justifyContent: loadOnDone || loader ? "center" : "",
        cursor: disabled || loadOnDone || loader ? "default" : "pointer",
        ...buttonStyle,
      }}
    >
      {startContent && !(loadOnDone || loader) && startContent}
      {loadOnDone || loader ? (
        <span className="loader"></span>
      ) : (
        <span
          className={textClassName}
          style={{
            flex: "1 1 0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...textStyle,
          }}
        >
          {text}
        </span>
      )}
      {endContent && !(loadOnDone || loader) && endContent}
    </button>
  );
};

export default Button;
