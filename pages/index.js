import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Intro from "../components/general/Intro";
import ContactButtons from "../components/general/ContactButtons";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";
import Router from "next/router";
import nprogress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Home({ page }) {
  // const { title, description } = page;
  console.log("page is: ", page);

  return (
    <div className={styles.container}>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Hero>
        <Navbar />
        <Intro introText={page.translation.homePageFields.heroSectionTitle} />
        <ContactButtons
          whatsappText={page.translation.homePageFields.whatsappButtonText}
          phoneText={page.translation.homePageFields.phoneButtonText}
        />
      </Hero>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        <ul className={styles.grid}>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              console.log(post);
              return (
                <li key={post.slug} className={styles.card}>
                  <Link href={post.path}>
                    <a>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: post.title,
                        }}
                      />
                      <div
                        className={styles.excerpt}
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}

          {!posts ||
            (posts.length === 0 && (
              <li>
                <p>Oops, no posts found!</p>
              </li>
            ))}
        </ul>
      </main> */}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const apolloClient = getApolloClient();

  const language = locale.toUpperCase();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($uri: String!, $language: LanguageCodeEnum!) {
        pageBy(uri: $uri) {
          translation(language: $language) {
            id
            slug
            content
            title
            language {
              locale
              slug
            }
            homePageFields {
              fieldGroupName
              heroSectionTitle
              phoneButtonText
              whatsappButtonText
            }
          }
          homePageFields {
            fieldGroupName
            heroSectionTitle
            phoneButtonText
            whatsappButtonText
          }
        }
        generalSettings {
          title
          url
          language
          description
        }
      }
    `,
    variables: {
      language,
      uri: "/",
    },
  });
  console.log("data is: ", data);
  const page = {
    ...data?.data.pageBy,
  };

  return {
    props: {
      page,
    },
  };
}
