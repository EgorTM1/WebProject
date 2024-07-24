import classes from './Navbar.module.css'
import OpenModalCityList from './components/ModalCityList/OpenModalCityList'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../constants/router'
import { useState, useRef, useEffect } from 'react'
import listCities from '../../../constants/listCities'
import ModalRegistration from './components/ModalRegistration/ModalRegistration'
import ModalLogIn from './components/ModalLogIn/ModalLogIn'


function Navbar() {
  const [city, setCity] = useState(listCities[0])
  const [open, setOpen] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  const [openLogIn, setOpenLogIn] = useState()


  const refDiv = useRef()
  const ref = useRef()


  function openModal(event) {
    setCity(event.target.getAttribute('value'))
    setOpen(false)
  }

  useEffect(() => {
    function clickOnOutside(event) { 
      
      if (open && ref.current && !ref.current.contains(event.target)  && !refDiv.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', clickOnOutside)

  }, [open])


  useEffect(() => {
    document.addEventListener('keydown', event => {
      if (event.code == 'Escape') {
        setOpenRegistration(false)
      }
    })

  }, [openRegistration])

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if (event.code == 'Escape') {
        setOpenLogIn(false)
      }
    })

  }, [openLogIn])
  

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>

        <div className={classes.changeCity}>
          <li className={classes.list_itemPict}>
            <img src="src/images/locationIcon.webp" alt="location" width={25} />

            <p ref={refDiv} onClick={() => setOpen(!open)} className={classes.city}>{city}</p>
          </li>
        
        </div>

        {open && <OpenModalCityList onCLick={openModal} ref={ref} />}

        
        <div className={classes.link}>
          <li className={classes.list_item}>
            <Link className={classes.Link} to={RoutesPath.Home}>Главная</Link>
          </li>

          <li className={classes.list_item}>
            <Link className={classes.Link} value='About' to={RoutesPath.About}>О нас</Link>
            </li>

          <li className={classes.list_item}>
            <Link className={classes.Link} value='Payment' to={RoutesPath.Payment}>Оплата</Link>
          </li>

          <li className={classes.list_item}>
            <Link className={classes.Link} value='Credit' to={RoutesPath.Credit}>Кредит</Link>
          </li>

          <li className={classes.list_item}>
            <Link className={classes.Link} to={RoutesPath.Contacts}>Контакты</Link>
          </li>

          <li className={classes.list_itemAdminPanel}>
            <Link to={RoutesPath.Admin}>Админ панель</Link>
          </li>
        </div>

        <div className={classes.logIn}>
          <li className={classes.list_item}>
            <p onClick={() => setOpenLogIn(!openLogIn)} className={classes.LogIn}>Вход</p>
            {openLogIn && <ModalLogIn open={openLogIn} />}
          </li>

          <li className={classes.split}>/</li>
          
          <li className={classes.list_item}>
            <p onClick={() => setOpenRegistration(!openRegistration)} className={classes.registration}>Регистрация</p>
            {openRegistration && <ModalRegistration open={openRegistration}/>}
          </li>
        </div>

      </ul>
    </nav>
  )
}


export default Navbar