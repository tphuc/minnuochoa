import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'

const myTheme = Themes.createFromLight({
  "type": "Custom",
  "layout": {
    "radius": "0px"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider themes={[myTheme]} themeType="Custom">
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)



