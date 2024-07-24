import classes from "./Categories.module.css";
import Search from "./components/Search/Search";
import { useState, useRef, useEffect } from "react";
import OpenCategories from "./components/OpenCategories/OpenCategories";

function Categories() {
  const [open, setOpen] = useState(false);

  const refDiv = useRef();
  const ref = useRef();

  useEffect(() => {
    const closeMenu = (event) => {
      if (
        open &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !refDiv.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
  }, [open]);


  return (
    <>
      <div className={classes.blockForCategories}>
        <div
          ref={refDiv}
          style={!open ? { border: `1px solid #86ae35` } : { border: "none" }}
          onClick={() => setOpen(!open)}
          className={classes.categories}
        >
          <div className={classes.burger_menu}>
            <span />
          </div>
          <div className={classes.text}>Все категории товаров</div>
        </div>
        <Search />
      </div>

      {open && (
        <OpenCategories
          ref={ref}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Categories;
