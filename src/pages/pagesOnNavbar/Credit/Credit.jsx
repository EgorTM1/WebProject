import classes from "./Credit.module.css";
import IOMoney from './components/IOMoney/IOMoney'
import CypiVCredit from './components/CypiVCredit/CypiVCredit'


function Credit() {
  return (
    <section>
      <p className={classes.headerCredit}>Кредит</p>

      <div className={classes.blockForCredit}>
        <IOMoney />
        <CypiVCredit />
      </div>
    </section>
  );
}

export default Credit;
