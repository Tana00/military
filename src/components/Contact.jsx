import React from "react";
import { useForm } from "react-hook-form";
import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="contact" className=" min-h-screen bg-secondary-color text-slate-200">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-slate-200 text-4xl font-nueu md:text-5xl lg:text-6xl font-bold mt-6 mb-2">
          Contact Us
        </h2>
        <p className="text-center p-2">
          Have a question or need assistance? Reach out to us using the form
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center ">
      
        <div
          className="w-full p-5 md:p-10 "
          style={{
            backgroundImage: "url('https://placeimg.com/640/480/tech')",
          }}
        >
          <h2 className="text-2xl md:text-4xl mt-4 md:mt-0 mb-5">Our Branch Office</h2>
          <div className=" flex flex-col gap-8 mt-5">
            <div className="flex items-center gap-4">
              <FaMap className=" text-2xl" />
              <p className="text-lg ">123 Main Street, Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className=" text-2xl" />
              <p className="text-lg ">+234 123 456 7890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className=" text-2xl" />
              <p className="text-lg ">
                <a href="mailto:"> armedforceloan@example.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-5 md:p-10">
          <h2 className="text-2xl md:text-4xl mt-4 md:mt-0 mb-5">Get In Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="block mb-2">Name</label>
              <input
                className="w-full p-4 border border-gray-300 rounded"
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-4 border border-gray-300 rounded"
                {...register("name", { required: "Phone number is required." })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-5">
              <label className="block mb-2">Email</label>
              <input
                className="w-full p-4 border border-gray-300 rounded"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-2 py-5 border border-gray-300 rounded"
                {...register("message", { required: "Message is required." })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              className="w-full p-4 bg-primary-color text-white rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
