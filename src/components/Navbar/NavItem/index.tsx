import styles from './styles.module.css'
import React from 'react'

interface INavItem {
  title: string
}

const NavItem = ({ title }: INavItem) => {
  return (
    <li>
      <a className={styles.navLink}>{title}</a>
    </li>
  )
}

export default NavItem
