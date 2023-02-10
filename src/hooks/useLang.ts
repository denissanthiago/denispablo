import React from 'react'
import { useRouter } from 'next/router'

const useLang = () => {
  const { locale, pathname, query, asPath, push } = useRouter()

  const onChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => push({ pathname, query }, asPath, { locale: event.target.value })

  return {
    onChangeLang,
    locale
  }
}

export default useLang
