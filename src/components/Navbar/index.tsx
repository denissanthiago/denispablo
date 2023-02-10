import React from 'react'
import { useTranslation } from 'next-i18next'
import { AiTwotoneSetting } from 'react-icons/ai'

import NavItem from 'src/components/Navbar/NavItem'
import NavItemOptions from 'src/components/Navbar/NavItemOptions'
import DropDownMenu from 'src/components/DropDownMenu'
import styles from './styles.module.css'
import { validateWindowFn } from 'src/utils'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false)
  const { t } = useTranslation()

  React.useEffect(() => {
    validateWindowFn(() => window.addEventListener('scroll', scrolledFn))
    return () => validateWindowFn(() => window.removeEventListener('scroll', scrolledFn))
  }, [])

  const scrolledFn = () => setIsScrolled(window.scrollY > 0)

  return (
    <header className={`${styles.header} ${isScrolled && styles.headerScrolled}`}>
      <nav className={styles.container}>
        <a href='#' className={`${styles.logo} ${isScrolled && styles.logoScrolled}`}>Denis<span>Pablo</span></a>
        <div className={styles.links}>
          <ul>
            <NavItem title={t('home:navbar_about')} />
            <NavItem title={t('home:navbar_portfolio')} />
            <NavItem title={t('home:navbar_services')} />
            <NavItem title={t('home:navbar_contacts')} />
          </ul>
          <NavItemOptions contentAction={<AiTwotoneSetting />}>
            <DropDownMenu />
          </NavItemOptions>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
