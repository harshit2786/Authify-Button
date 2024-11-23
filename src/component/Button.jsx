/* eslint-disable react/prop-types */
import { useState } from "react";
import { loginWithMicrosoft } from "./AuthHandler";
import "./styles.css";

const Button = ({
  id,
  handler,
  disabled = false,
  isLoading = false,
  startContent,
  endContent,
  text = "",
  buttonStyle = {},
  buttonClassName = "",
  textClassName = "",
  textStyle = {},
  authOrigin
}) => {
  const [loader, setLoader] = useState(false);
  const authHandler = async () => {
    if (disabled || isLoading || loader || !authOrigin) {
      return;
    }
    await loginWithMicrosoft(id, handler, setLoader,authOrigin);
  };
  return (
    <button
        className={buttonClassName}
      disabled={disabled || isLoading || loader}
      onClick={authHandler}
      style={{ display: "flex", alignItems: "center", gap : "8px", justifyContent : (isLoading || loader) ? "center" : "" , cursor : (disabled || isLoading || loader) ? "default" : "pointer" , ...buttonStyle }}
    >
        {(startContent && !( isLoading || loader) ) && startContent}
      {isLoading || loader ? (
        <span className="loader" ></span>
      ) : (
        <span className={textClassName} style={{flex: '1 1 0%', display:"flex", alignItems : "center", justifyContent :"center" ,...textStyle}} >{text}</span>
      )}
      {(endContent && !(isLoading || loader) ) && endContent}

    </button>
  );
};

export default Button;
