import React from 'react'

const useTheme = () => {
  const dataTheme = document.body.getAttribute('data-theme')
  const themeLocalStore = window.localStorage.getItem('get-persisted-preference-mode')
  const [theme, setTheme] = React.useState(themeLocalStore || dataTheme || 'light')

  console.log({ dataTheme, themeLocalStore })

  React.useEffect(() => {
    const themeChanged = theme === 'light' ? 'dark' : 'light'
    document.body.setAttribute('data-theme', themeChanged)
    window.localStorage.setItem('get-persisted-preference-mode', themeChanged)
  }, [theme])
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const isDarkTheme = theme === 'dark'

  return {
    theme,
    isDarkTheme,
    toggleTheme
  }
}

export default useTheme
