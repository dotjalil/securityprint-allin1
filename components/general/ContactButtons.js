import Link from "next/link";

const ContactButtons = (props) => {
  function setWhatsappHref() {
    return encodeURI(
      `https://wa.me/${props.whatsappNumber}?backup=true&text=مرحبًا،+السلام+عليكم+ورحمة+الله+وبركاته`
    );
  }

  return (
    <div
      className={`flex items-start gap-[27px] mt-[40px] flex-col sm:flex-row ${
        props.position === "right" ? "justify-start" : "justify-center"
      }`}
    >
      <Link
        href={props.whatsappUrl}
        className="flex justify-center items-center gap-1.5 text-left uppercase text-white w-full sm:w-[185px] gap-2.5 p-3 rounded-xl"
        style={{
          background:
            "linear-gradient(186.77deg, #45cb85 -201.23%, #268855 136.97%)",
        }}
      >
        <span className="text-base">{props.whatsappText}</span>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            opacity="0.4"
            d="M6.94006 20.63C8.43006 21.5 10.1601 22 12.0001 22C17.6301 22 22.31 17.03 21.98 11.41C21.64 5.60997 16.37 1.13996 10.3 2.13996C6.12004 2.82996 2.77005 6.21996 2.12005 10.4C1.74005 12.82 2.24007 15.11 3.33007 17L2.44006 20.31C2.24006 21.06 2.93004 21.74 3.67004 21.53L6.94006 20.63Z"
            fill="white"
          />
          <path
            d="M17 15.17C17 15.35 16.96 15.54 16.87 15.72C16.78 15.9 16.67 16.07 16.53 16.23C16.28 16.5 16.01 16.7 15.71 16.82C15.41 16.95 15.08 17.01 14.73 17.01C14.22 17.01 13.67 16.89 13.1 16.64C12.52 16.39 11.95 16.06 11.38 15.65C10.8 15.23 10.26 14.76 9.73999 14.25C9.21999 13.73 8.76003 13.18 8.34003 12.61C7.93003 12.04 7.59999 11.47 7.35999 10.9C7.11999 10.33 7 9.77998 7 9.25998C7 8.91998 7.05999 8.58998 7.17999 8.28998C7.29999 7.97998 7.49001 7.69997 7.76001 7.44997C8.08001 7.12997 8.42999 6.97998 8.79999 6.97998C8.93999 6.97998 9.08002 7.00998 9.21002 7.06998C9.34002 7.12998 9.45999 7.21998 9.54999 7.34998L10.7 8.99998C10.79 9.12998 10.86 9.23998 10.9 9.34998C10.95 9.45998 10.97 9.55998 10.97 9.65998C10.97 9.77998 10.93 9.89997 10.86 10.02C10.79 10.14 10.7 10.26 10.58 10.38L10.2 10.78C10.14 10.84 10.12 10.9 10.12 10.98C10.12 11.02 10.13 11.06 10.14 11.1C10.16 11.14 10.17 11.17 10.18 11.2C10.27 11.37 10.43 11.58 10.65 11.84C10.88 12.1 11.12 12.37 11.38 12.63C11.65 12.9 11.91 13.14 12.18 13.37C12.44 13.59 12.66 13.74 12.83 13.83C12.86 13.84 12.89 13.86 12.92 13.87C12.96 13.89 13 13.89 13.05 13.89C13.14 13.89 13.2 13.86 13.26 13.8L13.64 13.42C13.77 13.29 13.89 13.2 14 13.14C14.12 13.07 14.23 13.03 14.36 13.03C14.46 13.03 14.56 13.05 14.67 13.1C14.78 13.15 14.9 13.21 15.02 13.3L16.68 14.48C16.81 14.57 16.9 14.68 16.96 14.8C16.97 14.91 17 15.03 17 15.17Z"
            fill="white"
          />
        </svg>
      </Link>
      <Link
        className="flex justify-center items-center gap-1.5 text-left uppercase text-white w-full sm:w-[185px] gap-2.5 p-3 rounded-xl"
        style={{
          background:
            "linear-gradient(39.01deg, #0047bb 27.11%, #4ab4fb 105.68%)",
        }}
        href={`tel:${props.phoneNumber}`}
      >
        <span className="text-base">{props.phoneText}</span>
        <svg
          width={25}
          height={24}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            opacity="0.4"
            d="M12.29 14.21L9.02 17.48C8.66 17.16 8.31 16.83 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.59 13.57 11.94 13.91 12.29 14.21Z"
            fill="white"
          />
          <path
            d="M22.47 18.33C22.47 18.61 22.42 18.9 22.32 19.18C22.29 19.26 22.26 19.34 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.89 21.62 19.88 21.63 19.87 21.63C19.28 21.87 18.64 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.86 19 10.47 18.71 10.1 18.4L13.37 15.13C13.65 15.34 13.9 15.5 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ContactButtons;
