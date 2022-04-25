import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/w3.css'
import '../styles/w3colors.css'
import '../styles/w3pro.css'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
