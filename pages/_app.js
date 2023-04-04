import '../styles/globals.css'
import * as React from 'react'
import NextApp from 'next/app'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import Nav from '../components/nav'
import Navibar from '../components/navbar'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <head>
          <script async defer data-website-id="6d581cea-17fa-4aa6-9c62-742bbb3f6198" src="https://analytics.linkscape.app/umami.js"></script>
        </head>
        <Navibar />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
