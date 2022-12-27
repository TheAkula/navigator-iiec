import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './theme'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const rootContainer = document.getElementById('root')!
const root = createRoot(rootContainer)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
)
