import classes from "./CypiVCredit.module.css";

function CypiVCredit() {
  return (
    <div className={classes.CypiVCredit}>
      <img src="src/images/CypiVCredit.png" alt="image" />

      <div className={classes.blockForCypiVCredit}>
        <h2 className={classes.h2CypiVCredit}>
          Преимущества онлайн-кредитования:
        </h2>

        <div className={classes.blockForTextCypiVCredit}>
          <p className={classes.textCypiVCredit}>
            Для оформления покупки и кредита вам не нужно выходить из дома.
          </p>
          <p className={classes.textCypiVCredit}>
            В 95% случаев решение по онлайн кредиту принимается за 2 минуты.
          </p>
          <p className={classes.textCypiVCredit}>
            0% по кредиту до даты первого платежа
          </p>
          <p className={classes.textCypiVCredit}>
            Бесплатное досрочное погашение
          </p>
          <p className={classes.textCypiVCredit}>
            Бесплатное погашение кредита по всей России (в более чем 160 тысяч
            партнерских точек приема платежей)
          </p>
        </div>
      </div>

      <div className={classes.blockForCypiVCredit}>
        <h2 className={classes.h2CypiVCredit}>
          Условия кредитования системы «КупиВкредит»:
        </h2>

        <div className={classes.blockForTextCypiVCredit}>
          <p className={classes.textCypiVCredit}>
            Кредит доступен гражданам России в возрасте от 18 до 75 лет.
          </p>
          <p className={classes.textCypiVCredit}>
            Сумма кредитования – от 3 000 до 200 000 рублей.
          </p>
          <p className={classes.textCypiVCredit}>
            Первоначальный взнос – от 0%
          </p>
          <p className={classes.textCypiVCredit}>
            Срок кредитования - от 3 до 24 месяцев
          </p>
          <p className={classes.textCypiVCredit}>
            % ставка рассчитывается индивидуально
          </p>
        </div>
      </div>

      <div className={classes.blockForCypiVCredit}>
        <h2 className={classes.h2CypiVCredit}>
          Купить товары в кредит очень просто:
        </h2>

        <div className={classes.blockForTextCypiVCredit}>
          <p className={classes.textCypiVCredit}>
            Наполните корзину товарами и оформите заказ
          </p>
          <p className={classes.textCypiVCredit}>
            Дождитесь звонка менеджера, согласуйте заказ и перейдите{" "}
            <span className={classes.span}>на страницу оплаты заказа</span>
          </p>
          <p className={classes.textCypiVCredit}>
            Введите номер заказа и его сумму
          </p>
          <p className={classes.textCypiVCredit}>Нажмите Найти заказ</p>
          <p className={classes.textCypiVCredit}>Нажмите Оформить кредит</p>
          <p className={classes.textCypiVCredit}>
            Заполните заявку и получите решение ОНЛАЙН в течение 1–2 минут
          </p>
          <p className={classes.textCypiVCredit}>
            Подпишите кредитный договор с представителем Банка
          </p>
          <p className={classes.textCypiVCredit}>
            Пользуйтесь покупкой и погашайте ежемесячный платеж по кредиту без
            комиссий
          </p>
        </div>

        <p className={classes.textForTBank}>
          По вопросам, связанным с выдачей кредита, обращаться в АО «Тинькофф
          Банк» на горячую линию:
        </p>
        <p className={classes.text}>
          <span className={classes.span}>8 (800) 555-08-08</span>
          (звонок по России бесплатный и круглосуточный).  
        </p>
      </div>
    </div>
  );
}

export default CypiVCredit;
