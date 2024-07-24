import classes from "./ModalLogIn.module.css";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import Button from "../../../../../UI/Button/Button";

const ModalLogIn = (props) => {
  const { open } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(false);

  
  const refDialogLogIn = useRef();

  const inp2 = useRef();
  const inp3 = useRef();

  useEffect(() => {
    if (open) {
      refDialogLogIn.current.showModal();
    } else {
      refDialogLogIn.current.close();
    }
  }, [open]);

  useEffect(() => {
    function styles(ref) {
      ref.current.style.border = "1px solid green";
      ref.current.style.backgroundColor = "#fff";
    }

    function stylesDefault(id) {
      document.getElementById(id).style.backgroundColor = "#dfdede";
      document.getElementById(id).style.border = "none";
    }


    if (
      email != "" &&
      email.length > 6 &&
      email.includes(".") &&
      email.includes("@")
    )
      styles(inp2);
    else {
      stylesDefault("inp2");
      setDisabled(false);
    }

    if (password.length > 6) styles(inp3);
    else {
      stylesDefault("inp3");
      setDisabled(false);
    }

    if (
      email &&
      email.length > 6 &&
      email.includes(".") &&
      email.includes("@") &&
      password &&
      password.length > 6
    )
      setDisabled(true)
    else {
      setDisabled(false);
    }
  }, [email, password]);

  function setValue() {
    refDialogLogIn.current.close();
  }


  return createPortal(
    <dialog ref={refDialogLogIn} className={classes.modal}>
      <h2 className={classes.h2}>Войти</h2>

      <form className={classes.form}>
        <label htmlFor="inp2">Почта</label>
        <input
          ref={inp2}
          id="inp2"
          className={classes.input}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <label htmlFor="inp3">Пароль</label>
        <input
          ref={inp3}
          id="inp3"
          className={classes.input}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </form>

      <div className={classes.divForButton}>
        <Button
          onClick={() => (disabled ? setValue() : null)}
          disabled={disabled}
        >
          Войти
        </Button>
      </div>
      <div className={classes.forgetPasswordBlock}>
        <p className={classes.forgetPassword}>Забыли пароль?</p>
      </div>
    </dialog>,

    document.getElementById("modalLogIn")
  );
};

export default ModalLogIn;
