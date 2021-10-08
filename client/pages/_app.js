import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            {/* <Navigation /> */}
            <Component {...pageProps} />
            <Footer></Footer>
        </Fragment>
    )
}

export default MyApp
