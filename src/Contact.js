import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Log form data to see if it's being captured
  
    emailjs
      .send(
        'service_ftbmycf',
        'template_ddme7x5',
        {
          to_name: "AGGC", // Optional, you can remove this if not needed
          name: data.name,        // Check if this is being populated
          message: data.message,  // Check if this is being populated
          email: data.email,      // Check if this is being populated
        },
        '9p8SjgXCj3tGSsFY6'
      )
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        alert('Message sent!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
  };
  

  return (
    <div className="max-w-md mx-auto mt-2 py-16 px-10 bg-navBg text-white font-suse shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="mt-1 block w-full border-gray-300 text-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3 focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            className="mt-1 block w-full border-gray-300 text-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              A valid email is required
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            {...register("message", { required: true })}
            className="mt-1 block w-full border-gray-300 text-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3 focus:outline-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="relative group mt-4">
          <div className="absolute inset-x-0 bottom-0 h-8 bg-amber-700 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
          <button
            type="submit"
            className={`relative w-full h-10 flex mt-6 items-center justify-center text-white bg-gradient-to-r from-orange-400 via-navPurple to-orange-600 shadow-lg hover:translate-y-0.5 transition-all duration-500 shadow-orange-500/50 rounded-lg py-2 focus:outline-none`}
          >
            <div className="space-x-2 flex items-center">
              <span className="text-sm font-semibold">Submit</span>
            </div>
          </button>
        </div>
      </form>

      {/* OR Section */}
      <div className="relative my-8 flex items-center justify-center">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="mx-4 text-sm font-medium text-white">OR</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

      {/* Discord Contact Button */}
      <div className="relative group mt-4">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-violet-800 rounded-lg transform translate-y-1 transition-all duration-200 ease-in-out"></div>
        <button
          onClick={() => window.open('https://discord.gg/Kd3BXsDPkd', '_blank')}
          className={`relative w-full h-10 flex items-center justify-center text-white bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 shadow-lg hover:translate-y-0.5 transition-all duration-500 shadow-violet-500/50 rounded-lg py-2 focus:outline-none`}
        >
          <div className="space-x-2 flex items-center">
          <FontAwesomeIcon icon={faDiscord} className="text-lg" />
            <span className="text-sm font-semibold">Contact on Discord</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
