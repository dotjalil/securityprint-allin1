import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../components/Navbar.module.css";
import LogoAr from "../public/logo-white.svg";
import LogoEn from "../public/logo-white.svg";
import Image from "next/image";
import Global from "../public/global.svg";

export default function Navbar(props) {
  const { locale: activeLocale, locales, asPath } = useRouter();

  const availableLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div className="container flex justify-between items-center mt-16 absolute top-0 right-0 sm:right-auto left-0 sm:left-auto">
      <Link href="/">
        <Image
          alt="Logo arabic"
          height={60}
          src={activeLocale === "ar" ? LogoAr : LogoEn}
        />
      </Link>
      {/* Switch language button. Uncomment when English content is ready. */}
      {/* {availableLocales.map((locale) => {
        return (
          <p
            className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#f4f4f9]"
            key={locale}
          >
            <Link
              href={asPath}
              locale={locale}
              className={`flex gap-1 ${
                props.theme === "light" ? "text-black" : ""
              }`}
            >
              <Image alt="toggle language" src={Global} />
              {locale === "en" ? "ENGLISH" : "العربية"}{" "}
            </Link>
          </p>
        );
      })} */}
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
