import classes from "./About.module.css";
import aboutCompany from '../../../components/constants/aboutCompany'
import whereToStart from "../../../components/constants/whereToStart"


function About() {
  return (
    <section className={classes.section}>
      <h1 className={classes.header}>О компании</h1>

      <div className={classes.blockAboutCompany}>
        {aboutCompany.map(item => {
          return (
            <p key={item} className={classes.item}>{item}</p>
          )
        })}

        <p className={classes.mnogomeb}>
          В результате получается проект <span className={classes.mnogo}>Mnogo</span>
          <span className={classes.meb}>Meb.ru</span>. Надеемся, Вам понравится взаимодействие с нами.
        </p>
      </div>

      <a href="https://www.youtube.com/watch?v=yqRBE_Hf8FA" target="_blank">
        <img className={classes.imageYotube} src="src/images/youtube.png" alt="youtube_poster" />
      </a>

      <div className={classes.start}>
        <p className={classes.inro}>
          С чего начать?
        </p>

        <ul className={classes.list}>
          {whereToStart.map((item, index) => {
            return (
              <li className={classes.list_item} key={index}>
                <p className={classes.list_item_text}>{item.p}</p>
                <span className={classes.span}>{item.span}</span>
              </li>
            )
          })}
        </ul>

      </div>

    </section>
  );
}

export default About;
