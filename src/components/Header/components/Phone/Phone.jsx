import classes from './Phone.module.css'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../constants/router'


function Phone() {
  return (
    <div className={classes.phone}>
      <img className={classes.logo} src="src/images/logo.webp" alt="logo" width={100} />

      <div className={classes.contactsInfo}>
        <div className={classes.numberPhone}>
          <a type='phone' href="" className={classes.phone}>+7 (999)-999-99-99</a>
          <p className={classes.descForPhone}>Круглосуточный приём заказов</p>
        </div>
        <button className={classes.btn}>Бесплатный звонок</button>
      </div>

      <div className={classes.favoritesProd}>
        <Link to={RoutesPath.FavoritesProduct}>
          <img className={classes.like} src="src/images/favoritesProduct.png" alt="favorites" width={37} />
        </Link>

        <Link to={RoutesPath.Basket}>
          <img className={classes.basket} src="src/images/basket.jpg" alt="basket" width={40}/>
        </Link>   
      </div>
    </div>
  )
}

export default Phone