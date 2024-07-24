import Header from "../Header/Header";
import { Routes, Route } from 'react-router-dom'
import RoutesPath from "../constants/router"
import About from '../../pages/pagesOnNavbar/About/About'
import Contacts from '../../pages/pagesOnNavbar/Contacts/Contacts'
import Credit from '../../pages/pagesOnNavbar/Credit/Credit'
import Payment from '../../pages/pagesOnNavbar/Payment/Payment'
import Home from '../../pages/pagesOnNavbar/Home/Home'
import FavoritesProduct from '../../pages/pagesOnNavbar/FavoritesProduct/FavoritesProduct'
import Basket from '../../pages/pagesOnNavbar/Basket/Basket'
import RoutesForCategories from "./RoutesForCategories"

function Routing() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path={RoutesPath.Home} element={<Home />} />
        <Route path={RoutesPath.About} element={<About />}/>
        <Route path={RoutesPath.Payment} element={<Payment />}/>
        <Route path={RoutesPath.Contacts} element={<Contacts />}/>
        <Route path={RoutesPath.Credit} element={<Credit />}/>
        <Route path={RoutesPath.FavoritesProduct} element={<FavoritesProduct />} />
        <Route path={RoutesPath.Basket} element={<Basket />} />
      </Routes>
      <RoutesForCategories />

    </>
  )
}

export default Routing