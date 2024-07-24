import classes from "./ModalRegistration.module.css";
import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import Button from "../../../../../UI/Button/Button";

const ModalRegistration = (props) => {
  const { open } = props;

  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const refDialog = useRef();

  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();

  useEffect(() => {
    if (open) {
      refDialog.current.showModal();
    } else {
      refDialog.current.close();
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

    if (text !== "" && text.length >= 3) styles(inp1);
    else {
      stylesDefault("inp1");
      setDisabled(false);
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
      text &&
      text.length >= 3 &&
      email &&
      email.length > 6 &&
      email.includes(".") &&
      email.includes("@") &&
      password &&
      password.length > 6 &&
      click
    )
      setDisabled(true);
    else {
      setDisabled(false);
    }

    if (!click) setDisabled(false);
  }, [text, email, password, click]);

  function setValue() {
    refDialog.current.close();
    document.getElementById("buttonInOnReg").setAttribute("value", true);
  }

  return createPortal(
    <dialog ref={refDialog} className={classes.modal}>
      <h2 className={classes.h2}>Регистрация</h2>

      <form className={classes.form}>
        <label htmlFor="inp1">Имя</label>
        <input
          ref={inp1}
          id="inp1"
          className={classes.input}
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

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

      <div className={classes.personalData}>
        <input
          onClick={() => setClick(!click)}
          className={classes.checkbox}
          type="checkbox"
        />
        <p className={classes.text}>
          я согласен на обработку{" "}
          <span className={classes.span}>персональных данных</span>
        </p>
      </div>

      <div className={classes.divForButton}>
        <Button
          value={false}
          onClick={() => (disabled && click ? setValue() : null)}
          disabled={disabled}
        >
          Зарегистрироваться
        </Button>
      </div>
    </dialog>,

    document.getElementById("modalRegistration")
  );
};

export default ModalRegistration;
