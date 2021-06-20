import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout';

function About() {

    return (
        <Layout>
        <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/">Home </Link>  <b>New Post</b>  </div>
        </Layout>
    )
  }
  
  export default About