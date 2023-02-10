import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
import { useTranslation } from 'next-i18next'
import MenuItem from 'src/components/DropDownMenu/MenuItem'
import MenuLangContent from 'src/components/DropDownMenu/MenuLangContent'
import MenuThemeContent from 'src/components/DropDownMenu/MenuThemeContent'

export type IOptionState = 'list-option' | 'lang' | 'theme'

const MenuSelectOptionView = () => {
  const [optionSelect, setOptionSelect] = React.useState<IOptionState>('list-option')
  const { t } = useTranslation()

  if (optionSelect === 'lang') return <MenuLangContent setOptionSelect={setOptionSelect} />

  if (optionSelect === 'theme') return <MenuThemeContent setOptionSelect={setOptionSelect} />

  return (
    <>
      <MenuItem title={t('home:navbar_config_languages')} icon={<BiCaretRight />} onClick={() => setOptionSelect('lang')} />
      <MenuItem title={t('home:navbar_config_theme')} icon={<BiCaretRight />} onClick={() => setOptionSelect('theme')} />
    </>
  )
}

export default MenuSelectOptionView
