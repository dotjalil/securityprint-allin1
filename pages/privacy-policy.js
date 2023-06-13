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
import Contact from "../components/Contact";
import Header from "../components/Header";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function PrivacyPolicy({ page }) {
  const [whatsappUrl, setWhatsappUrl] = useState(null);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // const { title, description } = page;
  // console.log("page is: ", page);
  console.log("page content: ", page.translation.content);

  useEffect(() => {
    async function getWA() {
      const response = await fetch(
        "https://secprintapi.onrender.com/getShift",
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setWhatsappUrl(() =>
        encodeURI(
          `https://api.whatsapp.com/send?phone=${data.whatsapp}&text=اهــلاً+وسهــلاً`
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
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Header>
        <Navbar theme="light" />
      </Header>

      <h1 className="text-4xl text-center mb-[76px]">
        {page.translation.title}
      </h1>
      <div
        className="container mx-auto"
        dangerouslySetInnerHTML={{ __html: page.translation.content }}
      ></div>

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
      uri: "/privacy-policy",
    },
  });
  const page = {
    ...data?.data.pageBy,
  };

  return {
    props: {
      page,
    },
  };
}
