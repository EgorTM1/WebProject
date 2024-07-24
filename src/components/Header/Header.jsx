import classes from './Header.module.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import Phone from './components/Phone/Phone'

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <img src="src/images/action.jpg" alt="action"  />
          <img src="src/images/sell.jpg" alt="sell" />
        </div>
        
        <Navbar />
        <Phone />
        <Categories />
      </header>
    </>
  )
}

export default Header