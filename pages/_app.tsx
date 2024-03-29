import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import type { FunctionComponent, ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default appWithTranslation(MyApp as FunctionComponent<AppPropsWithLayout>)
