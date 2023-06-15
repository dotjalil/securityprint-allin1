import { useState, useEffect } from "react";
import Link from "next/link";
import { scrollTo } from "../../utils/smoothScroll";
import emailIcon from "../../public/icons/email-white.svg";
import Image from "next/image";

const MobileFloatingContactButton = ({
  width = "",
  position,
  toId,
  toRef,
  duration,
}) => {
  function handleClick() {
    return scrollTo({ id: toId, ref: toRef, duration });
  }

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <section className="md:hidden fixed bottom-0 left-0 right-0 mt-16 h-[60px]">
      <div style={{ height: "60px", width: "100%", background: "transparent" }}>
        {isVisible && (
          <button
            onClick={handleClick}
            className="flex justify-center items-center gap-1.5 text-left uppercase text-white w-[80%] mx-auto sm:w-auto gap-2.5 px-[26px] py-[12px] rounded-full"
            style={{
              background:
                "linear-gradient(93.58deg, #29295B -60.8%, #029D96 106.61%)",
            }}
          >
            <Image src={emailIcon} width={24} height={24} alt="email icon" />
            <span className="text-base">تواصل معنا</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default MobileFloatingContactButton;
