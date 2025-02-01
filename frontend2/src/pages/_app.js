import Layout from '@/components/layout/MainLayout.js'
 
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}