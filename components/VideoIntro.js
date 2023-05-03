import YoutubeEmbed from "./general/YouTubeEmbed/YoutubeEmbed";

const VideoIntro = (props) => {
  function getVideoId(url) {
    return url.split("v=")[1].split("&")[0];
  }
  return (
    // <section className="bg-[#F4F4F9] mt-[-218px] pt-[278px]">
    <section className="bg-[#F4F4F9] pt-[60px] xl:mt-[-218px] xl:pt-[450px] pb-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center gap-6 text-center sm:text-start sm:pl-14">
          <p className="text-4xl font-medium text-gray-800 uppercase">
            {props.title}
          </p>
          <p className="text-base leading-relaxed text-gray-900">
            {props.description}
          </p>
        </div>
        <div className="order-first">
          <YoutubeEmbed videoId={getVideoId(props.url)} />
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
