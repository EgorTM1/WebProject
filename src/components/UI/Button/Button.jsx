import classes from "./Button.module.css";

function Button({ children, disabled, onClick, value }) {
  return (
    <button id="buttonInOnReg" value={value} onClick={onClick}
      style={
        !disabled
          ? { background: `#c7c7c7`, cursor: "default" }
          : { background: "#fe7be2" }
      }
      type="submit"
      className={classes.button}
    >
      {children}
    </button>
  );
}

export default Button;
