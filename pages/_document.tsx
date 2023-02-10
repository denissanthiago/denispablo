import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head title='DenisPablo'>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Denis Pablo</title>
        </Head>
        <body>
          <Script
            id='show-banner'
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const themeInitializerScript = `(function(){
  ${setInitialColorMode.toString()}
  setInitialColorMode()
})`

function setInitialColorMode () {
  function getInitialColorMode () {
    const persistedPreferenceMode = window.localStorage.getItem('get-persisted-preference-mode')

    if (persistedPreferenceMode) return persistedPreferenceMode

    const preference = window.matchMedia('(preference-color-schema: dark)')

    if (preference.matches) return 'dark'

    return 'light'
  }

  const currentColorMode = getInitialColorMode()
  console.log(currentColorMode)
  const element = document.documentElement

  element.style.setProperty('--initial-color-mode', currentColorMode)

  if (currentColorMode === 'dark') document.documentElement.setAttribute('data-theme', 'dark')
}

export default MyDocument
