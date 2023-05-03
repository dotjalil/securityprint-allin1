import { useEffect, useState, useRef } from "react";
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
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Home({ page }) {
  const [whatsappUrl, setWhatsappUrl] = useState(null);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // const { title, description } = page;
  // console.log("page is: ", page);

  useEffect(() => {
    async function getWA() {
      const response = await fetch(
        "https://security-social-helpers.herokuapp.com/getShift",
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setWhatsappUrl(() =>
        encodeURI(
          `https://wa.me/${data.whatsapp}?backup=true&text=مرحبًا،+السلام+عليكم+ورحمة+الله+وبركاته`
        )
      );
    }
    getWA();
  }, []);

  function handleOpenPopup(brand) {
    setModalData(brand);
    setShowBrandModal(true);
  }

  function closeBrandModalHandler() {
    setShowBrandModal(false);
  }

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
      <style jsx global>{`
        body {
          overflow: ${showBrandModal === true ? "hidden" : "auto"};
        }
      `}</style>
      <Hero>
        <Navbar />
        <Intro introText={page.translation.homePageFields.heroSectionTitle} />
        {whatsappUrl && (
          <ContactButtons
            whatsappText={page.translation.homePageFields.whatsappButtonText}
            whatsappUrl={whatsappUrl}
            phoneText={page.translation.homePageFields.phoneButtonText}
          />
        )}
      </Hero>

      <SubBrands
        title={page.translation.homePageFields.subBrandsTitle}
        description={page.translation.homePageFields.subBrandsSection}
        brands={page.subBrands.sort(function sortBrands(brandA, brandB) {
          if (brandB.databaseId < brandA.databaseId) {
            return 1;
          } else {
            return -1;
          }
        })}
        lang={page.translation.language.slug}
        openPopup={handleOpenPopup}
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
      <Partners
        title={page.translation.homePageFields.partnersSectionTitle}
        subtitle={page.translation.homePageFields.partnersSectionSubtitle}
        partners={page.partners}
      />
      {whatsappUrl && <Footer whatsappUrl={whatsappUrl} />}
      {showBrandModal && modalData && (
        <Modal
          closeHandler={closeBrandModalHandler}
          brand={modalData}
          lang={page.translation.language.slug}
        />
      )}
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
        }
        generalSettings {
          title
          url
          language
          description
        }
        subBrands(where: { language: $language_filter_enum }) {
          nodes {
            content
            subBrandFields {
              gradient
              logo {
                altText
                mediaItemUrl
              }
              logoColored {
                altText
                mediaItemUrl
              }
              websiteUrl
              description
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
            excerpt
            databaseId
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
        partners {
          nodes {
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
            id
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
  const page = {
    ...data?.data.pageBy,
    subBrands: [...data?.data.subBrands.nodes],
    initiatives: [...data?.data.initiatives.nodes],
    partners: [...data?.data.partners.nodes],
  };

  return {
    props: {
      page,
    },
  };
}
