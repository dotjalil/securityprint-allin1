import styles from "./Hero.module.css";

const Header = (props) => {
  return (
    <div
      // className="flex flex-col items-center content-start justify-start pb-0.5 bg-gradient-to-bl from-blue-800 to-blue-400 min-h-screen"
      className="flex flex-col items-center content-center justify-center pb-0.5 h-[180px]"
      style={{
        width: "100%",
      }}
    >
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Header;
