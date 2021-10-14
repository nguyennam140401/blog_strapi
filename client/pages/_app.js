import '../styles/globals.css'
import '../styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import { Fragment, useContext, useEffect } from 'react'
import Head from 'next/head'
import AuthContextProvider from '../context/AuthContext'
import CategoryContextProvider from '../context/CategoryContext'
import AlertContextProvider from '../context/AlertContext'
import AlertMessage from '../components/AlertMessage/AlertMessage'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url) => {
            console.log(`Loading: ${url}`)
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])
    return (
        <Fragment>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossOrigin="anonymous"
                />
            </Head>
            <AuthContextProvider>
                <AlertContextProvider>
                    <AlertMessage />
                    <CategoryContextProvider>
                        <Navigation />
                        {getLayout(<Component {...pageProps} />)}
                        <Footer></Footer>
                    </CategoryContextProvider>
                </AlertContextProvider>
            </AuthContextProvider>
        </Fragment>
    )
}
export default MyApp
