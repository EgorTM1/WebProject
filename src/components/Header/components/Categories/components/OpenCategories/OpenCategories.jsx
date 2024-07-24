import classes from './OpenCategories.module.css'
import { listCategories } from '../../../../../constants/listCategories'
import { listCategoriesArray } from '../../../../../constants/listCategories'
import { Link } from 'react-router-dom'
import React from 'react'


const OpenCategories = React.forwardRef((props, ref) => {
  const { onClick, mouseEnter, mouseLeave } = props

  return (
    <div onMouseLeave={mouseLeave} ref={ref} className={classes.categories_bottom}>
      <ul className={classes.list}>
             
        {listCategoriesArray.map((item, index) =>  {
          return (
            <Link key={item} to={listCategories[`${item}`]}>
              <li onMouseEnter={mouseEnter} data-index={index} onClick={onClick} className={classes.list_Item}>
                <p className={classes.list_Item_text}>{item}</p>
                <img className={classes.img} src="src/images/arrow.png" alt="arrow" width={10} />
              </li>
            </Link>
          )
        })}

      </ul>    

      <div id='divForImages' className={classes.divForImages}>
        
      </div>

    </div>
  )
})

OpenCategories.displayName = 'OpenCategories'

export default OpenCategories