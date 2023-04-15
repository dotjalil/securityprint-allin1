import { Html, Head, Main, NextScript } from "next/document";

function MyDocument(props) {
  return (
    <Html lang={props.locale} dir={props.locale === "ar" ? "rtl" : "ltr"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
