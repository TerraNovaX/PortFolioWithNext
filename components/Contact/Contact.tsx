import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "../Helper/SectionHeading";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="mt-22 mb-24">
        <SectionHeading>CONTACTS</SectionHeading>
      </div>

      <div className="grid grid-cols-2 w-[90%] mx-auto items-center ml-[10%] gap-24 mt-10 ">
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
