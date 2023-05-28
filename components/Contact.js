import Image from "next/image";
import Link from "next/link";
import dotIcon from "../public/icons/dot.svg";
import waIcon from "../public/icons/whatsapp.svg";
import phoneIcon from "../public/icons/call.svg";
import emailIcon from "../public/icons/email.svg";
import locationIcon from "../public/icons/location.svg";
import spinner from "../public/icons/90-ring.svg";
import styles from "./Contact.module.css";
import { sendContactForm } from "../lib/sendContactForm";
import { useState } from "react";

const initFormData = { name: "", phone: "", email: "", message: "" };

const initFormState = { isLoading: false, error: "", formData: initFormData };

const Contact = (props) => {
  const [formState, setFormState] = useState(initFormState);
  const { isLoading, error, formData } = formState;

  function handleChange({ target }) {
    setFormState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [target.name]: target.value,
      },
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(formData);
      setFormState(initFormState);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }

  const contactFormFields = {
    title: props.lang === "ar" ? "توصل معنا الان" : "Send us now",
    email: props.lang === "ar" ? "البريد الالكتروني" : "Email",
    phone: props.lang === "ar" ? "رقم الجوال" : "Phone Number",
    message: props.lang === "ar" ? "الرسالة/الشكوى" : "Message/complain",
    fullName: props.lang === "ar" ? "الاسم الكامل" : "Full Name",
    send: props.lang === "ar" ? "ارسال" : "Send",
  };
  const contactSection = {
    title: props.fields.contactSectionTitle,
    subtitle: props.fields.contactSectionSubtitle,
    content: props.fields.contactSectionContent,
    phone: props.fields.phoneNumber,
    whatsapp: props.fields.whatsappNumber,
    email: props.fields.contactEmail,
    location: props.fields.address,
  };

  return (
    // <section className="bg-[#F4F4F9] mt-[-218px] pt-[278px]">
    <section className="py-[120px] text-center sm:text-start">
      <h2
        className="text-4xl font-medium text-gray-800 uppercase text-center"
        style={{
          width: "100%",
          maxWidth: 805,
          margin: "0 auto",
          marginBottom: 24,
        }}
      >
        {contactSection.title}
      </h2>
      <p
        className="text-base leading-relaxed text-center text-gray-900 "
        style={{ width: "100%", maxWidth: 805, margin: "0 auto" }}
      >
        {contactSection.subtitle}
      </p>

      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center gap-6 sm:pl-14">
          <div className="text-base leading-relaxed text-gray-900">
            <p className="flex items-center gap-2 mb-4">
              <Image src={dotIcon} height={16} width={16} alt="dot icon" />{" "}
              <span className={styles.gradientText}>
                {props.lang === "ar"
                  ? "خطنا الساخن 24/7 "
                  : "our 24/7 hot line "}
              </span>
            </p>
            <h2 className="text-3xl mb-6 text-start">
              {props.lang === "ar"
                ? "نقدم الحلول الإلكترونية المبتكرة على مدار ٢٤ ساعة !"
                : "we we provide the best services in the Kingdom"}
            </h2>
            {/* <p>
              يقدم خبراء Security Print و CX وخبراء الأمن السيبراني حلولاً
              متخصصة في مكافحة الابتزاز. تعمل علاماتنا التجارية الأربع معًا
              بسلاسة لتوفير حماية شاملة لأعمالك. ثق بنا لجميع احتياجاتك الأمنية.
            </p> */}
            <div className="mt-4">
              <ul>
                <li className="mb-2">
                  <Link
                    href={props.whatsapp}
                    className="flex items-center gap-2"
                  >
                    <Image alt="icon" src={waIcon} width={36} height={36} />
                    {props.whatsapp.split("me/")[1].split("?")[0]}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={`tel:${contactSection.phone}`}
                    className="flex items-center gap-2"
                  >
                    <Image alt="icon" src={phoneIcon} width={36} height={36} />
                    {contactSection.phone}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={`mailto:${contactSection.email}`}
                    className="flex items-center gap-2"
                  >
                    <Image alt="icon" src={emailIcon} width={36} height={36} />
                    {contactSection.email}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      alt="icon"
                      src={locationIcon}
                      width={36}
                      height={36}
                    />
                    {contactSection.location}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          {error && <p>{error}</p>}
          <form
            style={{
              background:
                "linear-gradient(90deg, rgba(41, 41, 91, 0.12) 0.03%, rgba(2, 157, 150, 0.12) 99.98%)",
            }}
            className="w-full max-w-sm mx-auto bg-white p-8 rounded-md"
          >
            <h3 className="text-3xl mb-4">{contactFormFields.title}</h3>
            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              name="name"
              value={formData.name}
              placeholder={contactFormFields.fullName}
              onChange={handleChange}
            />

            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              name="phone"
              value={formData.phone}
              placeholder={contactFormFields.phone}
              onChange={handleChange}
            />
            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              name="email"
              value={formData.email}
              placeholder={contactFormFields.email}
              onChange={handleChange}
            />
            <textarea
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder={contactFormFields.message}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-white text-base font-bold py-2 px-4 rounded-md transition duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #29295B 0.03%, #029D96 99.98%)",
              }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className="mx-auto"
                  width={24}
                  height={24}
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}",
                    }}
                  />
                  <g className="spinner_V8m1">
                    <circle
                      cx={12}
                      cy={12}
                      r="9.5"
                      fill="none"
                      strokeWidth={3}
                    />
                  </g>
                </svg>
              )}
              {!isLoading && <>{contactFormFields.send}</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
