import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  variable: "--alexandria",
  subsets: ["latin", "arabic"],
});

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${alexandria.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
