import Link from "next/link";
import Image from "next/image";
import fbLogo from "../public/social/facebook.svg";
import twitterLogo from "../public/social/twitter.svg";
import smsLogo from "../public/social/sms.svg";
import instaLogo from "../public/social/insta.svg";
import waLogo from "../public/social/whatsapp.svg";

const Footer = (props) => {
  return (
    <footer className="flex flex-col en-text" dir="ltr">
      <div className="container" style={{ margin: "0 auto" }}>
        <div className="flex justify-between content-center py-6 flex-col-reverse gap-8 sm:flex-row items-center">
          <div>
            <p className="uppercase text-center sm:text-left">
              Commercial Registration Number: 2251498988 <br />
              Date: 09/17/1442 AH <br />
              Tax Number: 310925236400003
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Link href="mailto:contact@security.com.sa" target="_blank">
              <Image
                src={smsLogo}
                alt="facebook page link"
                width={36}
                height={36}
              />
            </Link>
            <Link href={props.whatsappUrl} target="_blank">
              <Image
                src={waLogo}
                alt="facebook page link"
                width={36}
                height={36}
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100083441167855"
              target="_blank"
            >
              <Image
                src={fbLogo}
                alt="facebook page link"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://www.instagram.com/secprint.sa/" target="_blank">
              <Image
                src={instaLogo}
                alt="facebook page link"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://twitter.com/secprint.sa" target="_blank">
              <Image
                src={twitterLogo}
                alt="facebook page link"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="container" style={{ margin: "0 auto" }}>
          <div className="flex flex-col-reverse gap-3 sm:flex-row justify-between content-center py-5 bg-[#F8F8F8]">
            <p className="text-center sm:text-start">
              <Link href="/" className="text-[#0147BC]">
                SECURITYPRNT
              </Link>{" "}
              2023 ALL RIGHT RESERVED
            </p>
            <div className="flex gap-6 justify-evenly">
              <Link href="/privacy-policy" className="text-[#032E47]">
                PRIVECY POLICY
              </Link>
              <Link href="/terms-conditions" className="text-[#032E47]">
                TERMS & CONDITIONS{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
