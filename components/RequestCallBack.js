import Image from "next/image";
import Link from "next/link";
import dotIcon from "../public/icons/dot.svg";
import waIcon from "../public/icons/whatsapp.svg";
import phoneIcon from "../public/icons/call.svg";
import emailIcon from "../public/icons/email.svg";
import locationIcon from "../public/icons/location.svg";
import successIcon from "../public/icons/success-icon.svg";
import spinner from "../public/icons/90-ring.svg";
import styles from "./Contact.module.css";
import { sendContactForm } from "../lib/sendContactForm";
import { useState } from "react";

const initFormData = {
  name: "",
  phone: "",
  email: "",
  whatsapp: "",
  message: "",
};

const initFormState = { isLoading: false, error: "", formData: initFormData };

const RequestCallBack = (props) => {
  const [formState, setFormState] = useState(initFormState);
  const { isLoading, error, formData } = formState;
  const [contactMethod, setContactMethod] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleContactMethod({ target }) {
    setContactMethod(target.value);
  }

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
      setIsSubmitted(true);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }

  const contactFormFields = {
    title: props.lang === "ar" ? "معلومات التواصل" : "Contact details",
    email: props.lang === "ar" ? "أدخل البريد الالكتروني" : "Email",
    phone: props.lang === "ar" ? "أدخل رقم الجوال" : "Phone Number",
    message: props.lang === "ar" ? "أكتب رسالتك" : "Message/complain",
    firstName: props.lang === "ar" ? "الاسم الأول" : "First Name",
    whatsapp: props.lang === "ar" ? "أدخل رقم الواتساب" : "First Name",
    send: props.lang === "ar" ? "تأكيد" : "Confirm",
  };
  const contactSection = {
    title: props.fields.title,
    subtitle: props.fields.subtitle,
    text1: props.fields.text1,
    text2: props.fields.text2,
    text3: props.fields.text3,
  };

  return (
    // <section className="bg-[#F4F4F9] mt-[-218px] pt-[278px]">
    <section id="contact" className="py-[120px] text-center sm:text-start">
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
                  ? contactSection.text1
                  : "our 24/7 hot line "}
              </span>
            </p>
            <h2 className="text-3xl mb-6 text-start">
              {props.lang === "ar"
                ? contactSection.text2
                : "we we provide the best services in the Kingdom"}
            </h2>
            <p>{contactSection.text3}</p>
            {/* <div className="mt-4">
              <ul>
                <li className="mb-2">
                  <Link
                    href={`tel:${contactSection.phone}`}
                    className="flex items-center gap-2"
                  >
                    <Image alt="icon" src={phoneIcon} width={36} height={36} />
                    <span style={{ direction: "ltr" }}>
                      {contactSection.phone}
                    </span>
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
            </div> */}
          </div>
        </div>
        <div
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(41, 41, 91, 0.12) 0.03%, rgba(2, 157, 150, 0.12) 99.98%)",
          }}
        >
          {!isSubmitted && (
            <form className="">
              <h3 className="text-3xl mb-4">{contactFormFields.title}</h3>
              {error && <p>{error}</p>}
              <input
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                name="name"
                value={formData.name}
                placeholder={contactFormFields.firstName}
                onChange={handleChange}
              />
              <select
                value={contactMethod}
                onChange={handleContactMethod}
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              >
                <option value="">اختر طريقة التواصل المناسبة</option>
                <option value="email">البريد الالكتروني</option>
                <option value="whatsapp">عن طريق الواتساب</option>
                <option value="phone">اتصال هاتفي</option>
              </select>

              {contactMethod === "email" && (
                <input
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder={contactFormFields.email}
                  onChange={handleChange}
                />
              )}

              {contactMethod === "phone" && (
                <input
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder={contactFormFields.phone}
                  onChange={handleChange}
                />
              )}

              {contactMethod === "whatsapp" && (
                <input
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  placeholder={contactFormFields.whatsapp}
                  onChange={handleChange}
                />
              )}

              {contactMethod && (
                <textarea
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder={contactFormFields.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              )}

              {contactMethod && (
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
              )}
            </form>
          )}

          {isSubmitted && (
            <div className="text-center flex flex-col flex-wrap items-center align-center justify-center h-full">
              <Image
                src={successIcon}
                width={50}
                height={50}
                alt="success icon"
              />
              <h3 className="text-xl text-center mt-4">
                تم تلقي طلبك بنجاح، سنتواصل معك في أقرب وقت ممكن!
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestCallBack;
