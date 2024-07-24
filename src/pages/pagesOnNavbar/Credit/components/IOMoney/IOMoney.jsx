import classes from "./IOMoney.module.css";


function IOMoney() {
  return (
    <div className={classes.IOMoney}>
      <div className={classes.IOMoney__Intro}>
        <p className={classes.text}>
          Специально для вас на нашем сайте имеется возможность приобрести
          товары в кредит, не выходя из дома.
        </p>

        <p className={classes.text}>
          Все что для этого нужно - создать заказ и при согласовании заказа
          сообщить нашему менеджеру, что вам нужен кредит.
        </p>

        <img
          className={classes.imageIOMoney}
          src="src/images/IOMoney.png"
          alt="IOMoney"
        />
      </div>
      <div className={classes.IOMoney__description}>
        <p className={classes.headerDescription}>
          Оплата с помощью сервиса ЮKassa Заплатить по частям
        </p>

        <p className={classes.text}>
          Копить не обязательно: можно получить товар сейчас, а заплатить позже
          по частям, раз в месяц.
        </p>

        <div className={classes.divElement1}>
          <h2 className={classes.h2}>Всё онлайн</h2>
          <p className={classes.text}>
            Кредит выдаётся во время оплаты, нужно подождать одобрения несколько
            минут.
          </p>
        </div>

        <div className={classes.divElement}>
          <h2 className={classes.h2}>Простая анкета</h2>
          <p className={classes.text}>
            Как правило, нужны только данные паспорта.
          </p>
        </div>

        <div className={classes.divElement}>
          <h2 className={classes.h2}>Понятные условия</h2>
          <p className={classes.text}>
            Итоговую сумму и график платежей вы увидите перед тем, как взять
            кредит.
          </p>
        </div>

        <div className={classes.divElement}>
          <h2 className={classes.h2}>Всё под контролем</h2>
          <p className={classes.text}>
            График ежемесячных платежей и условия всегда можно посмотреть{" "}
            <span>в кошельке ЮMoney.</span>
          </p>
        </div>

        <div className={classes.divElement}>
          <h2 className={classes.h2}>Удобное погашение</h2>
          <p className={classes.text}>
            Деньги списываются автоматически из кошелька, нужно просто вовремя
            его пополнить.
          </p>
        </div>

        <p className={classes.text2}>Посмотреть подробную инструкцию</p>
      </div>

      <div className={classes.conditions}>
        <h2 className={classes.h2Conditions}>Условия</h2>

        <div className={classes.blockForConditions}>
          <h3 className={classes.h3}>Кому подходит</h3>

          <div className={classes.suitableForWhom}>
            <p className={classes.text}>— гражданам России</p>
            <p className={classes.text}>— от 18 до 65</p>
            <p className={classes.text}>— с действующим паспортом</p>
            <p className={classes.text}>— постоянной пропиской</p>
            <p className={classes.text}>— и постоянным доходом</p>
          </div>
        </div>

        <div className={classes.CreditSum}>
          <h2 className={classes.h2}>Сумма кредита</h2>
          <p className={classes.text}>3 000 – 150 000 ₽</p>
        </div>

        <div className={classes.CreditTime}>
          <h2 className={classes.h2}>Срок кредита</h2>
          <p className={classes.text}>
            6 или 12 месяцев (льготный период 5 дней)
          </p>
        </div>

        <div className={classes.CreditPayment}>
          <h2 className={classes.h2}>Переплата</h2>
          <p className={classes.text}>от 1,9% до 5,9% в месяц</p>
        </div>

        <div className={classes.CreditHowPayment}>
          <h2 className={classes.h2}>Как платить по кредиту</h2>
          <p className={classes.text}>
            Пополняйте кошелёк ЮMoney (если его нет, то во время оплаты
            появится). Выплата по кредиту будет списываться раз в месяц из
            кошелька — просто следите, что денег в нём достаточно.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IOMoney;
