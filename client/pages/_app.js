import '../styles/globals.css'
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { Fragment, useContext } from 'react'
import Head from 'next/head'
import AuthContextProvider from '../context/AuthContext'
import CategoryContextProvider from '../context/CategoryContext'
function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
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
                <CategoryContextProvider>
                    <Navigation />
                    {getLayout(<Component {...pageProps} />)}
                    <Footer></Footer>
                </CategoryContextProvider>
            </AuthContextProvider>
        </Fragment>
    )
}
export default MyApp
