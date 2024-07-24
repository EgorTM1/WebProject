import classes from './Search.module.css'

function Search() {
  return (
    <div className={classes.search}>
      <input className={classes.input} type="text" placeholder='Поиск товаров...' />
      <img className={classes.img} src="src/images/search.png" alt="search" width={30} />
    </div>
  )
}

export default Search