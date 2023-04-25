import Image from "next/image";

const PhotoSection = (props) => {
  return (
    // <section className="bg-[#F4F4F9] mt-[-218px] pt-[278px]">
    <section className="pt-[60px] pb-16">
      <h2
        className="text-4xl font-medium text-gray-800 uppercase text-center"
        style={{
          width: "100%",
          maxWidth: 805,
          margin: "0 auto",
          marginBottom: 24,
        }}
      >
        {props.title}
      </h2>
      <p
        className="text-base leading-relaxed text-center text-gray-900 uppercase"
        style={{ width: "100%", maxWidth: 805, margin: "0 auto" }}
      >
        {props.subtitle}
      </p>

      <div className="container mx-auto mt-16 grid grid-cols-2">
        <div className="flex flex-col justify-center gap-6 pl-14">
          <p className="text-base leading-relaxed text-gray-900 uppercase">
            <Image
              className="mb-6"
              alt=""
              height={62}
              width={336}
              src={props.logoInDescription.mediaItemUrl}
            />
            {props.description}
          </p>
        </div>
        <div>
          <Image
            src={props.mainPhoto.mediaItemUrl}
            alt=""
            width={666}
            height={444}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
