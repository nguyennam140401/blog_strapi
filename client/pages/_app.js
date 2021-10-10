import '../styles/globals.css'
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import Head from 'next/head'
import Loading from '../components/Loading/Loading'
import { useContext } from 'react'
import AuthContextProvider from '../context/AuthContext'
function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossorigin="anonymous"
                />
            </Head>
            <AuthContextProvider>
                <Navigation />

                <Component {...pageProps} />

                <Footer></Footer>
            </AuthContextProvider>
        </Fragment>
    )
}

export default MyApp
