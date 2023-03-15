import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <h1 className="text-3xl mb-4 font-bold">Contact Us</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Our Email
          </label>
          <a href="mailto:example@example.com">example@example.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
