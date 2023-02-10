import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Navbar from 'src/components/Navbar'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { NextPage } from 'next'
type THomePageProps = { locale: string }

const Home: NextPage<THomePageProps> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <div style={{ height: '1800px', width: '100%' }} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home']))
    }
  }
}

export default Home
