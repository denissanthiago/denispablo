import React from 'react'
import { useTranslation } from 'next-i18next'
import BackMenu from 'src/components/DropDownMenu/MenuSelectOptionView/BackMenu'
import useLang from 'src/hooks/useLang'
import styles from './styles.module.css'

import { IOptionState } from 'src/components/DropDownMenu/MenuSelectOptionView'

interface IMenuLangContent {
 setOptionSelect: React.Dispatch<React.SetStateAction<IOptionState>>
}

const MenuLangContent = ({ setOptionSelect }: IMenuLangContent) => {
  const { t } = useTranslation()
  const { onChangeLang, locale } = useLang()

  return (
    <>
      <BackMenu onClick={() => setOptionSelect('list-option')} title={t('home:navbar_config_languages')} />
      <select className={styles.selectLang} value={locale} onChange={onChangeLang}>
        <option value='es'>Español</option>
        <option value='en'>Ingles</option>
      </select>
    </>
  )
}

export default MenuLangContent
