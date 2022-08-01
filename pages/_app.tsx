import '../styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/layout/index';
import { store, wrapper } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}
export default MyApp

// if we used wrapper
// export default wrapper.withRedux(MyApp)