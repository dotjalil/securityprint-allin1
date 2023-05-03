import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../components/Navbar.module.css";
import LogoAr from "../public/logo-ar.svg";
import LogoEn from "../public/logo-en.svg";
import Image from "next/image";
import Global from "../public/global.svg";

export default function Navbar() {
  const { locale: activeLocale, locales, asPath } = useRouter();

  const availableLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div className="container flex justify-between items-center mt-16 absolute top-0 right-0 sm:right-auto left-0 sm:left-auto">
      <Link href="/">
        <Image
          alt="Logo arabic"
          src={activeLocale === "ar" ? LogoAr : LogoEn}
        />
      </Link>
      {availableLocales.map((locale) => {
        return (
          <p
            className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#f4f4f9]"
            key={locale}
          >
            <Link
              href={asPath}
              locale={locale}
              className={`flex gap-1 ${activeLocale === "ar" ? "" : "ar-text"}`}
            >
              <Image alt="toggle language" src={Global} />
              {locale === "en" ? "ENGLISH" : "العربية"}{" "}
            </Link>
          </p>
        );
      })}
    </div>

    // <div className="container">
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/">
    //           <a className={styles.home}>Home</a>
    //         </Link>
    //       </li>

    //     </ul>
    //     <ul>
    // {availableLocales.map((locale) => {
    //   return (
    //     <li key={locale}>
    //       <Link href={asPath} locale={locale}>
    //         <a className={styles.toggle}>{locale.toUpperCase()}</a>
    //       </Link>
    //     </li>
    //   );
    // })}
    //     </ul>
    //   </nav>
    // </div>
  );
}
