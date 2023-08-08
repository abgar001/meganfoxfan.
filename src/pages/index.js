import useSite from "hooks/use-site";
import { getPaginatedPosts } from "lib/posts";
import { WebsiteJsonLd } from "lib/json-ld";

import { HOST } from "../../config";

import styles from "./Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Layout from "components/Layout";
import Header from "components/Header";
import Section from "components/Section";
import Container from "components/Container";
import PostCard from "components/PostCard";
import Pagination from "components/Pagination";

// import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  // if (
  //   typeof window !== "undefined" &&
  //   /^https?:\/\/([^\/]+\.)?facebook\.com(\/|$)/i.test(document.referrer)
  // ) {
  //   const params = window.location.href.slice(
  //     window.location.href.indexOf("/?") + 2
  //   );
  //   const serachParams = new URLSearchParams(params);
  //   if (serachParams.has("link")) {
  //     const postId = serachParams.get("link");
  //     window.location.href = HOST + postId;
  //   }
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: "archive",
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: "/posts",
      },
    },
  };
}
