import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>I don't want to write a self intro text so I'll just write this instead and fill up space. Thanks. </p>
      </section>
    </Layout>
  ); 
}
