import classes from './OpenModalCityList.module.css'
import listCities from '../../../../../constants/listCities'
import React from 'react'
import { createPortal } from 'react-dom'


const OpenModalCityList = React.forwardRef((props, ref) => {
  const { onCLick } = props

  return ( createPortal(
    <dialog ref={ref} id='cities' open className={classes.modal}>
      <ul className={classes.list}>

        {listCities.map(item => {
          return (
            <li onClick={onCLick} key={item} value={item} className={classes.list_Item}>{item}</li>
          )
        })}

      </ul>
    </dialog>,

    document.getElementById('modalCity')
    )
  )
})

OpenModalCityList.displayName = 'OpenModalCityList'


export default OpenModalCityList