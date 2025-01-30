import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="grid grid-cols-2 w-[90%] mx-auto items-center gap-72 mt-10 ">
        {/** CONTACT FORM */}
        <div>
          <ContactForm />
        </div>
        {/** CONTACT INFO */}
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
