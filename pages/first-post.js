import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Image from 'next/image';
import Alert from "../components/alert";
// import { getSortedPostsData } from "../lib/posts";


export default function FirstPost() {

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Alert type={'success'}> Alert components </Alert>
      {/* {getSortedPostsData()} */}

    </Layout>
  );
}

// github push and vercelgit remote remove origin