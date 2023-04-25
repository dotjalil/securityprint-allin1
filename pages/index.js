import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Intro from "../components/general/Intro";
import ContactButtons from "../components/general/ContactButtons";
import PhotoSection from "../components/PhotoSection";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";
import Router from "next/router";
import nprogress from "nprogress";
import SubBrands from "../components/SubBrands/SubBrands";
import VideoIntro from "../components/VideoIntro";
import Initiatives from "../components/Initiatives";

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

      <SubBrands
        title={page.translation.homePageFields.subBrandsTitle}
        description={page.translation.homePageFields.subBrandsSection}
        brands={page.subBrands.reverse()}
        lang={page.translation.language.slug}
      />
      <VideoIntro
        title={page.translation.homePageFields.videoSectionTitle}
        description={page.translation.homePageFields.videoSectionDescription}
        url={page.translation.homePageFields.videoSectionUrl}
      />
      <PhotoSection
        title={page.translation.homePageFields.photoSectionTitle}
        subtitle={page.translation.homePageFields.photoSectionSubtitle}
        description={page.translation.homePageFields.photoSectionDescription}
        mainPhoto={page.translation.homePageFields.photoSectionMainPhoto}
        logoInDescription={
          page.translation.homePageFields.photoSectionLogoInDescription
        }
      />
      <Initiatives
        title={page.translation.homePageFields.initiativesSectionTitle}
        subtitle={page.translation.homePageFields.initiativesSectionSubtitle}
        initiatives={page.initiatives}
      />
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
      query PostBySlug(
        $uri: String!
        $language: LanguageCodeEnum!
        $language_filter_enum: LanguageCodeFilterEnum = ALL
      ) {
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
              subBrandsSection
              subBrandsTitle
              initiativesSectionSubtitle
              initiativesSectionTitle
              partnersSectionSubtitle
              partnersSectionTitle
              photoSectionDescription
              photoSectionLogoInDescription {
                altText
                mediaItemUrl
              }
              photoSectionMainPhoto {
                altText
                mediaItemUrl
              }
              photoSectionSubtitle
              photoSectionTitle
              videoSectionDescription
              videoSectionTitle
              videoSectionUrl
            }
          }
          homePageFields {
            fieldGroupName
            heroSectionTitle
            phoneButtonText
            whatsappButtonText
            subBrandsSection
            subBrandsTitle
            initiativesSectionSubtitle
            initiativesSectionTitle
            partnersSectionSubtitle
            partnersSectionTitle
            photoSectionDescription
            photoSectionLogoInDescription {
              altText
              mediaItemUrl
            }
            photoSectionMainPhoto {
              altText
              mediaItemUrl
            }
            photoSectionSubtitle
            photoSectionTitle
            videoSectionDescription
            videoSectionTitle
            videoSectionUrl
          }
        }
        generalSettings {
          title
          url
          language
          description
        }
        subBrands {
          nodes {
            content
            subBrandFields {
              gradient
              logo {
                altText
                mediaItemUrl
              }
            }
            tags {
              nodes {
                name
                translations {
                  name
                }
              }
            }
            title
          }
        }
        initiatives(where: { language: $language_filter_enum }) {
          nodes {
            content
            title
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      language,
      language_filter_enum: language,
      uri: "/",
    },
  });
  console.log("data is: ", data);
  const page = {
    ...data?.data.pageBy,
    subBrands: [...data?.data.subBrands.nodes],
    initiatives: [...data?.data.initiatives.nodes],
  };

  return {
    props: {
      page,
    },
  };
}
