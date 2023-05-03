import styles from "./SubBrands.module.css";
import Sub1 from "../../public/subbrands-logos/sub-1.svg";
import Sub2 from "../../public/subbrands-logos/sub-2.svg";
import Sub3 from "../../public/subbrands-logos/sub-3.svg";
import Sub4 from "../../public/subbrands-logos/sub-4.svg";
import Sub5 from "../../public/subbrands-logos/sub-5.svg";
import Image from "next/image";
import Link from "next/link";
import SubBrand from "./SubBrand";

const SubBrands = (props) => {
  console.log(props.brands);

  function passPopupData(brand) {
    props.openPopup(brand);
  }

  return (
    <section
      className={`${styles["subbrands-container"]} xl:relative xl:h-[450px] w-full bg-transparent xl:mt-[-232px] mx-auto`}
    >
      <div className="mx-auto bg-white rounded-2xl py-[65px]">
        <div className="container mx-auto text-center xl:h-[450px]">
          <p
            className="text-4xl font-medium text-gray-800 uppercase"
            style={{ marginBottom: 24 }}
          >
            {props.title}
          </p>
          <p
            className="text-base leading-relaxed text-center text-gray-900 uppercase"
            style={{ width: "100%", maxWidth: 805, margin: "0 auto" }}
          >
            {props.description}
          </p>
          <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-5 gap-[20px] mt-[48px]">
            {props.brands &&
              props.brands.map((brand) => (
                <SubBrand
                  key={brand.title}
                  title={brand.title}
                  description={brand.subBrandFields.description}
                  tags={brand.tags.nodes.map((tagNode) => tagNode.name)}
                  gradient={brand.subBrandFields.gradient}
                  logo={brand.subBrandFields.logo}
                  logoColored={brand.subBrandFields.logoColored}
                  websiteUrl={brand.subBrandFields.websiteUrl}
                  lang={props.lang}
                  popupData={passPopupData}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBrands;
