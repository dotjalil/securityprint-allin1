import Link from "next/link";
import Image from "next/image";
import styles from "./SubBrands.module.css";

const SubBrand = (props) => {
  return (
    <Link
      className={`${styles["subbrand-item"]} flex flex-col h-full gap-[25px] items-center justify-center p-6 rounded-xl`}
      style={{
        marginTop: 48,
        height: 253,
        background: props.gradient,
      }}
      href="#"
    >
      <div className="inline-flex items-center justify-end px-4 py-2 bg-white bg-opacity-10 rounded-full">
        <p className="text-xs text-white uppercase">{props.tags}</p>
      </div>
      <Image
        className="mt-10px"
        alt="sub"
        src={props.logo.mediaItemUrl}
        width={185}
        height={75}
        style={{ maxHeight: 75, maxWidth: 185 }}
      />

      <div
        className={`${styles["learn-more"]} flex flex-col items-center justify-center px-6 py-3 bg-white rounded-xl h-[45px]`}
      >
        <p className="text-lg font-light uppercase">اعرف اكثر</p>
      </div>
    </Link>
  );
};

export default SubBrand;
