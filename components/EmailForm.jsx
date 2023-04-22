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
    <div className="rounded-md border-2 border-red-200 p-2 flex justify-center z-50">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 w-[380px] border-2 border-red-400 "
      >
        <div className="m-1 flex justify-between">
          <span>Your Email: </span>
          <input
            className=" px-2 border-2 border-red-600 text-black"
            name="user_email"
            type="text"
            placeholder="ex@gmail.com"
            required
          />
        </div>
        <div className="m-1 flex justify-between">
          <span>Subject: </span>
          <input
            name="subject"
            type="text"
            placeholder="Company Name"
            className="px-2 border-2 border-red-600 text-black"
          />
        </div>
        <div className="m-1 flex justify-between">
          <span className="block">Message: </span>
          <textarea
            name="message"
            cols="24"
            rows="5"
            placeholder="What do you need help with?"
            className=" px-2 border-2 border-red-600 text-black"
            required
          ></textarea>
        </div>
        <div className="flex justify-center ">
          <button className="border-2 border-red-800 w-full" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
