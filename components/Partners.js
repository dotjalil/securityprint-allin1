import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Partners = (props) => {
  return (
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
        <Link
          href="https://twitter.com/secprint_sa/status/1624132665640161282?s=46&t=Luf1v4YHcOxCCSN8bdWudg"
          target="_blank"
        >
          {props.title}
        </Link>
      </h2>
      <p
        className="text-base leading-relaxed text-center text-gray-900"
        style={{ width: "100%", maxWidth: 805, margin: "0 auto" }}
      >
        {props.subtitle}
      </p>
      <div
        className="container"
        style={{ margin: "0 auto", marginTop: "48px" }}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          {props.partners.map((partner) => (
            <div
              key={partner.id}
              data={partner.featuredImage.node.mediaItemUrl}
              data-alt={partner.featuredImage.node.altText}
              style={{
                width: "100%",
                minHeight: "128px",
                backgroundImage: `url(${partner.featuredImage.node.mediaItemUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
