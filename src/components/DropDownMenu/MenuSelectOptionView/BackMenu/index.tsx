import { FaArrowLeft } from 'react-icons/fa'
import styles from './styles.module.css'

interface IBackMenu {
  onClick: () => void
  title: string
}

const BackMenu = ({ onClick, title }: IBackMenu) => {
  return (
    <div className={styles.containerButtonBack}>
      <div className={styles.toggleBtnBack} onClick={onClick}>
        <FaArrowLeft />
      </div>
      <span className={styles.containerTextTitle}>{title}</span>
    </div>
  )
}

export default BackMenu
