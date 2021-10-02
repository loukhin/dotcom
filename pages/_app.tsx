import type { AppProps /*, AppContext */ } from 'next/app'

import '../public/styles.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp
