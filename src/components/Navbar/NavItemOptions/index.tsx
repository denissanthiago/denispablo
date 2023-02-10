import React from 'react'
import styles from './styles.module.css'

interface INavItemOptions {
  contentAction: string | React.ReactElement
  children: React.ReactElement | React.ReactElement[]
}

const NavItemOptions = ({ contentAction, children }: INavItemOptions) => {
  const [open, setOpen] = React.useState<boolean>(false)

  const ref = React.useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickOutside = () => setOpen(false)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) onClickOutside && onClickOutside()
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [onClickOutside])

  return (
    <div ref={ref} className={styles.container}>
      <div className={`${styles.toggleBtnOptions} ${open && styles.selectBtnOptions}`} onClick={() => setOpen(prevState => !prevState)}>
        {contentAction}
      </div>
      {
        open && children
      }
    </div>
  )
}

export default NavItemOptions
