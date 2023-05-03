const Intro = (props) => {
  return (
    <p className="text-center text-4xl md:text-5xl text-[#f4f4f9] leading-normal">
      {/* <p className="text-center text-5xl text-[#f4f4f9] mt-[240px] leading-normal"> */}
      {props.introText}
    </p>
  );
};

export default Intro;
