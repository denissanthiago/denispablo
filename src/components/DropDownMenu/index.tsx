import styles from './styles.module.css'
import React from 'react'
import MenuSelectOptionView from 'src/components/DropDownMenu/MenuSelectOptionView'

const DropDownMenu = () => {
  return (
    <div className={styles.containerDropDown}>
      <MenuSelectOptionView />
    </div>
  )
}

export default DropDownMenu
