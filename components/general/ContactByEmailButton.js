import Link from "next/link";
import { scrollTo } from "../../utils/smoothScroll";
import emailIcon from "../../public/icons/email-white.svg";
import Image from "next/image";

const ContactByEmailButton = ({
  width = "",
  position,
  toId,
  toRef,
  duration,
}) => {
  function handleClick() {
    return scrollTo({ id: toId, ref: toRef, duration });
  }

  console.log("position: ", position === "start");

  return (
    <div
      className={`flex items-start gap-[27px] mt-[40px] flex-col sm:flex-row ${
        position === "start" ? "justify-start" : "justify-center"
      }`}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 text-left uppercase text-white w-full sm:w-auto gap-2.5 px-[26px] py-[12px] rounded-xl justify-center"
        style={{
          background:
            "linear-gradient(93.58deg, #29295B -60.8%, #029D96 106.61%)",
        }}
      >
        <Image src={emailIcon} width={24} height={24} alt="email icon" />
        <span className="text-base">تواصل معنا</span>
      </button>
    </div>
  );
};

export default ContactByEmailButton;
