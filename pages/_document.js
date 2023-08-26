import { Html, Head, Main, NextScript } from 'next/document'
import { Provider, useSelector } from 'react-redux'
import {useRouter} from 'next/router';
import { useEffect } from "react";
import { selectUser } from '../redux/features/userSlice'
import SignIn from './signin';

const paths = [
  {
    homeModulePath: [ '/home', '/affiliates', '/support', '/vendor' ]
  },
  {
    dashboardPath: [ '/dashboard', '/dashboard/home', '/dashboard/account', 'dashboard/new-product' ]
  }
]

export default function Document() {
  const meta = {
    title: 'Moniearners',
    description: 'Affiliate Marketing Platform.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}