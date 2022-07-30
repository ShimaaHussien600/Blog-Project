import '../styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/layout/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
export default MyApp