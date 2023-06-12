import Image from "next/image";

const Initiatives = (props) => {
  return (
    // <section className="bg-[#F4F4F9] mt-[-218px] pt-[278px]">
    <section className="bg-[#F4F4F9] pt-[60px] pb-16">
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
        className="text-base leading-relaxed text-center text-gray-900"
        style={{ width: "100%", maxWidth: 805, margin: "0 auto" }}
      >
        {props.subtitle}
      </p>

      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        {props.initiatives.map((initiative) => (
          <div
            key={initiative.title}
            className="inline-flex flex-col items-start justify-start bg-white shadow rounded-xl"
          >
            <Image
              className="rounded-xl"
              alt={initiative.featuredImage.node.altText}
              src={initiative.featuredImage.node.mediaItemUrl}
              width={527}
              height={334}
            />
            <div className="flex flex-col space-y-2.5 items-start justify-center px-6 py-3">
              <p className="text-sm text-[#0148BC]">
                {`#${initiative.tags.nodes[0].name.split(" ").join("_")}`}
              </p>
              <p className="text-2xl capitalize">{initiative.title}</p>
              <p
                className="text-base leading-relaxed text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: initiative.content.replace(/(<([^>]+)>)/gi, ""),
                }}
              >
                {/* Another way of rendering the content, this will have a problem with special characters. */}
                {/* {initiative.content.replace(/(<([^>]+)>)/gi, "")} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;
