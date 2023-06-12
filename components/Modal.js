import Link from "next/link";
import ContactButtons from "./general/ContactButtons";
import Image from "next/image";
import globalIcon from "../public/global.svg";

const Modal = (props) => {
  function closeModalHandler() {
    props.closeHandler();
  }
  return (
    <div
      className="main-modal fixed w-full h-90 inset-0 z-50 overflow-scroll flex justify-center items-start md:items-center animated fadeIn faster py-5 md:py-0"
      style={{ background: "rgba(0,0,0,.7)" }}
    >
      <div className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:w-[90%] mx-auto rounded-2xl shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-[48px] px-[24px] md:py-[60px] md:px-[48px]">
          {/* <!--Header--> */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold"></p>
            <div
              className="modal-close cursor-pointer z-50"
              onClick={closeModalHandler}
            >
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          {/* <!--Body--> */}
          <div className="my-0 md:my-5 flex justify-between flex-col-reverse md:flex-row">
            <div className="max-w-[525px]">
              <div className="flex gap-4 mb-4 justify-center md:justify-start md:mx-0 mt-4">
                {props.brand.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-800 rounded-full text-white text-[12px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-[28px] font-bold mb-[24px] text-center md:text-start">
                {props.brand.title}
              </h3>
              <p className=" text-center md:text-start">
                {props.brand.description}
              </p>
              <ContactButtons
                whatsappUrl="https://google.com"
                phoneText={props.lang === "ar" ? "اتصل بنا" : "Call Us"}
                whatsappText={props.lang === "ar" ? "راسلنا" : "Chat with Us"}
                position="right"
              />
            </div>
            <div>
              <Image
                className="mx-auto md:mx-0"
                src={props.brand.logo}
                width={249}
                height={249}
                alt="logo"
              />
              <Link
                href={props.brand.websiteUrl}
                target="_blank"
                className="flex text-white p-3 rounded-xl gap-2 mx-auto justify-center mt-[28px]"
                style={{
                  background:
                    "linear-gradient(90deg, #29295B 0%, #059E97 99.51%)",
                  maxWidth: "185px",
                }}
              >
                <Image src={globalIcon} height={24} width={24} alt="icon" />
                {props.lang === "ar" ? "زور موقعنا" : "Visit Site"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
