import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <section>
      <h2 className={classes.h2}>Контакты</h2>

      <div className={classes.allContacts}>
        <div className={classes.contacts}>
          <p className={classes.text}>
            <b>Телефоны:</b>{" "}
            <span className={classes.span}>+7 495 151-15-19</span>,{" "}
            <span className={classes.span}>8 800 775-85-54</span> –
            круглосуточно, без выходных.
          </p>

          <p className={classes.text}>
            <b>Почта для обращений: </b>
            <span className={classes.span}>letter@mnogomeb.ru</span>
          </p>

          <p className={classes.text}>
            <b>Центральный офис: </b>
            117405, Москва, м. Аннино, ул. Дорожная, 60Б, этаж 1, оф. 115, БЦ
            Аннино-Плаза (оплата товара при самовывозе).
          </p>
        </div>

        <div className={classes.tecnicalThings}>
          <p className={classes.textTecnical}>
            <b>Пункт самовывоза: </b>
            117405, Москва, м. Аннино, ул. Дорожная, 60, стр. 22, складская
            территория БЦ (склад). Перед получением товара, пройдите,
            пожалуйста, в офис для оплаты заказа.
          </p>

          <p className={classes.textTecnical}>
            <b>Время работы: </b>
            заказы отгружаются с 9:00 до 18:00 без выходных; обед с 13:00 до
            14:00.
          </p>

          <br />

          <p className={classes.textTecnical}>
            Уважаемые покупатели! Склад MnogoMeb.ru находится на территории
            бизнес-центра Аннино Плаза. Администрация бизнес-центра взимает
            плату за въезд транспорта на территорию:
          </p>

          <br />

          <ul className={classes.list}>
            <li>- легковой автомобиль – 200 руб./час,</li>
            <li>
              - малотоннажный грузовой автомобиль (газель) – 200 руб./час,{" "}
            </li>
            <li>- крупногабаритный грузовой транспорт – 300 руб./час.</li>
          </ul>

          <p className={classes.textTecnical}>
            Оплата осуществляется при выезде, на КПП.{" "}
          </p>

          <br />

          <p className={classes.textTecnical}>
            <b>
              Уважаемые покупатели! На складе производится только отгрузка
              заказов.{" "}
            </b>
            Если Вы хотите оформить новый заказ, Вы можете сделать это
            несколькими способами:
          </p>

          <ul className={classes.list}>
            <li>- позвонить нам по номеру, указанному вверху страницы,</li>
            <li>- оформить заказ на сайте самостоятельно. </li>
          </ul>
        </div>

        <div className={classes.messengers}>
          <p>Присоединяйтесь к нам в социальных сетях!</p>

          <div className={classes.images}>
            <img src="src/images/MessengersVk.png" alt="Vk" />
            <img src="src/images/MessengersClassmates.png" alt="Classmates" />
            <img src="src/images/MessengersYoutube.png" alt="Youtube" />
          </div>

          <p className={classes.p}>
            Мы публикуем много интересного: акции, новости, советы, интерьерные
            фотографии для вдохновения, идеи для Вашего дома и другие полезные
            материалы.
          </p>

          <p>
            <b>
              Уважаемые клиенты, в случае отказа от исполнения договора, в
              случае расторжения договора,
            </b>{" "}
            Ваши заявления, требования и иные юридически значимые сообщения
            будут считаться направленными только в случае их отправления по
            почте по адресу места нашего нахождения: Москва, ул. Дорожная, д.
            60Б, офис 115.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
