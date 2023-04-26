import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jprdu4t",
        "template_b5l6de9",
        form.current,
        "RBFmH8MM6lo97VicZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className=" absolute right-0 left-0 m-auto w-[380px]  p-2 flex justify-center z-50">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative bg-[#3a434c] p-4 sm:w-[380px]  border-2 border-[#af5c5c] rounded-sm h-[500px]"
      >
        <div className="m-1 flex justify-between ">
          <span className="md: mr-2">Your Email: </span>
          <input
            className=" px-2 rounded-sm border-gray-600 border-[1px] transition ease-out focus:outline-none focus:border-gray-800 text-black"
            name="user_email"
            type="text"
            placeholder="ex@gmail.com"
            required
          />
        </div>
        {/* <div className="m-1 flex justify-between md:justify-start">
          <span className="md: mr-2">Subject: </span>
          <input
            name="subject"
            type="text"
            placeholder="Company Name"
            className="px-2 border-gray-600 border-[1px] transition ease-out focus:outline-none focus:border-gray-800 rounded-sm text-black"
          />
        </div> */}
        <div className="m-1 flex justify-between ">
          <span className="block md: mr-2">Message: </span>
          <textarea
            name="message"
            cols="24"
            rows="5"
            placeholder="What do you need help with?"
            className=" px-2 border-gray-600 border-[1px] transition ease-out focus:outline-none focus:border-gray-800 rounded-sm text-black"
            required
          ></textarea>
        </div>

        <div className="absolute bottom-6 left-0 right-0 m-auto flex justify-center">
          <button
            className="bg-[#af5c5c] border-2 border-[#af5c5c] md:w-[150px] w-[120px] rounded-sm "
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
