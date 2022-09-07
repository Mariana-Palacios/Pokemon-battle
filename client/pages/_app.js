import '../pages/styles/index.css'
// import '../'
import Nav from './components/nav/nav'
// pages/_app.js

// import '../global-styles/main.scss'

export default function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Nav/>
    <Component {...pageProps} />
  </div>)
}