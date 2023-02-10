import React from 'react'
import { useTranslation } from 'next-i18next'

import BackMenu from 'src/components/DropDownMenu/MenuSelectOptionView/BackMenu'
import RangeColor from 'src/components/RangeColor'
import useTheme from 'src/hooks/useTheme'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

import type { IOptionState } from 'src/components/DropDownMenu/MenuSelectOptionView'

interface IMenuThemeContent {
 setOptionSelect: React.Dispatch<React.SetStateAction<IOptionState>>
}

const MenuThemeContent = ({ setOptionSelect }: IMenuThemeContent) => {
  const { t } = useTranslation()
  const { toggleTheme, isDarkTheme } = useTheme()

  return (
    <>
      <BackMenu onClick={() => setOptionSelect('list-option')} title={t('home:navbar_config_theme')} />
      <div>
        <RangeColor />
        <button onClick={toggleTheme}>
          <span>Theme</span>
          {
            isDarkTheme ? <MdDarkMode /> : <MdOutlineDarkMode />
          }
        </button>
      </div>
    </>
  )
}

export default MenuThemeContent
