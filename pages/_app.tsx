import '../styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/layout/index';
import { store } from '../app/store'
import { Provider } from 'react-redux'
import SEO from "@bradgarropy/next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        {/* a library that add multi meta  */}
        <SEO title="مركز المدونة" description="An blog of Articles using Next.js and tailwindcss"
          keywords={['nextjs', 'المدونة', 'مركز المدونة', 'Tailwind and Nextjs Blog']}
          icon='/favicon.ico'
          twitter={{
            card: 'summary',
            site: 'somesite',
            image: '/vercel.svg',
          }} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}
export default MyApp

// if we used wrapper
// export default wrapper.withRedux(MyApp)