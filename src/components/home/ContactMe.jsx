"use client";

import { contactInfo } from "@/src/staticData/home/home";
import { useState } from "react";
import Input from "../ui/fields/Input";
import Textarea from "../ui/fields/TextArea";
import SectionHeading from "../shared/SectionHeading";
import ContactInfo from "./ContactInfo";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = formValues;

  const reset = () => {
    setFormValues({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValues", formValues);

    // reset after form submit
    reset();
  };

  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <SectionHeading {...contactInfo.contactInfoHeading} />

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
              {contactInfo?.contactInfoData?.map((item) => (
                <ContactInfo key={item?.id} {...item} />
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <Input handleChange={handleChange} placeholder="Nom" value={fullName} className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40" />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Adresse Email"
                  handleChange={handleChange}
                  name="email"
                  value={email}
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className="form-group">
                <Textarea
                  handleChange={handleChange}
                  name="message"
                  value={message}
                  placeholder="Votre Message"
                  className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                />
              </div>
              <div className=" form-group">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                  aria-label="Envoyer le message"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
        <iframe
          className="w-full overflow-hidden border-10 border-platinum dark:border-greyBlack embed-map h-80 2xl:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5127.863155790868!2d3.0522939643643384!3d36.75288701228858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb24b9b633399%3A0x406c4b490f0a020!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1647011868776!5m2!1sen!2sdz"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          aria-label="Contact Map"
        />
      </div>
    </div>
  );
};

export default ContactMe;
