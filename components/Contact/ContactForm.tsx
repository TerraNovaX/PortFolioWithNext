import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg p-4 text-[#0e16ff]">
      <h1 className="text-3xl text-[#0e16ff] font-bold">
        Lets Work Together !
      </h1>
      <p className="text- mt-3 text-base ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
        lobortis felis vitae aliquet. Ut aliquet nulla vitae diam imperdiet
        convallis. Sed pellentesque gravida est ut iaculis. Praesent sit amet
        consequat lacus. Nullam accumsan, sapien eu venenatis pellentesque,
        massa urna faucibus magna, et interdum ante mauris quis arcu.
      </p>
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 placeholder:text-blue-500 bg-blue-100 px-6 py-3 rounded-md
            border-[1.5px] border-blue-700 border-opacity-15"></input>
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 placeholder:text-blue-500 bg-blue-100 px-6 py-3 rounded-md
            border-[1.5px] border-blue-700 border-opacity-15"></input>
        </div>
        <div className="flex mt-5 flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 placeholder:text-blue-500 bg-blue-100 px-6 py-3 rounded-md
            border-[1.5px] border-blue-700 border-opacity-15"></input>
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 placeholder:text-blue-500 bg-blue-100 px-6 py-3 rounded-md
            border-[1.5px] border-blue-700 border-opacity-15"></input>
        </div>
        <div>
          <select
            className="w-full mt-5 placeholder:text-blue-500 bg-blue-100 px-4 py-3.5 rounded-md border-[1.5px]
          border-blue-700 border-opacity-15 outline-none">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="frontend">FrontEnd Development</option>
            <option value="backend">BackEnd Development</option>
            <option value="fullstack">FullStack Development</option>
          </select>
        </div>
        <textarea
          rows={8}
          className="w-full mt-5 bg-blue-100 placeholder:text-blue-500 px-4 py-3.5 
          rounded-md border-[1.5px] border-blue-700 border-opacity-15"
          placeholder="Message"
        />
        <div className="mt-4">
          <button className="px-8 py-3.5 text-white bg-[#0e16ff] hover:bg-[#0e16ffba] transition-all duration-300 rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
