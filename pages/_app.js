import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const montserratArabic = localFont({
  src: "../public/Montserrat_Arabic/Montserrat-Arabic Regular 400.otf",
  variable: "--montserrat-arabic",
});

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const activeFont = locale === "ar" ? montserratArabic : montserrat;

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${activeFont.style.fontFamily};
        }
        .ar-text {
          font-family: ${montserratArabic.style.fontFamily};
        }
        .en-text {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
