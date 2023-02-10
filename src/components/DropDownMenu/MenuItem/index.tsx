import React from 'react'
import styles from './styles.module.css'

interface IMenuItem { title: string, icon: React.ReactNode, onClick: () => void }

const MenuItem = ({ title, icon, onClick }: IMenuItem) => {
  return (
    <div className={styles.containerMenuItem} onClick={onClick}>
      <div>{title}</div>
      {icon}
    </div>
  )
}

export default MenuItem
