import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'
import { GlobalStateProvider } from './swr'
import './index.css'
const myTheme = Themes.createFromLight({
  "type": "Custom",
  "layout": {
    "radius": "0px"
  },
  "palette": {
    "accents_9": '#00070f',
    "accents_8": '#011a36',
    "accents_7": '#06315c',
    "accents_6": '#0f4c81',
    "accents_5": '#28628f',
    "accents_4": '#44799c',
    "accents_3": '#6590a8',
    "accents_2": '#8aa7b5',
    "accents_1": '#fafafa',
    "foreground": '#06315c'
  },
  "font":{
    "sans": "'Montserrat', sans-serif",
    "mono": "'Montserrat', sans-serif"
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



