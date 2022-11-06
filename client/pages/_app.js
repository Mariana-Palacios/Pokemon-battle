import '../pages/styles/index.css'
// import '../'
import Nav from './components/Nav/Nav'
import store from './store'
import { Provider } from 'react-redux'

// pages/_app.js

// import '../global-styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return(
  <Provider store={store}>
    <Nav/>
    <Component {...pageProps} />
  </Provider>
  )
}