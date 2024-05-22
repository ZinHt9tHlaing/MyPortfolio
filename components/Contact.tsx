import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className=" pt-20 pb-12 bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[80%] mx-auto">
        <div className="">
          <p className="heading-mini">Get in Touch</p>
          <h1 className="heading-primary">
            Lets make your{" "}
            <span className=" text-yellow-300 font-secondary">Brand</span>
          </h1>
          <p className=" text-[15px] text-white mt-4 opacity-75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            autem ad veritatis id quidem, itaque, perferendis necessitatibus
            dicta beatae quis vel expedita minus inventore iusto ea numquam
            velit assumenda minima?
          </p>
          <Link href={"/"}>
            <h1 className="mt-8 mb-8 text-3xl text-yellow-300 underline font-bold">
              +959 965 664 813
            </h1>
          </Link>
        </div>
        <div>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className=" py-3 outline-none text-white bg-gray-800 rounded-md px-4"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className=" py-3 outline-none text-white bg-gray-800 rounded-md px-4"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              className=" py-3 outline-none mt-6 w-full text-white bg-gray-800 rounded-md px-4"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className=" py-3 outline-none mt-6 w-full text-white bg-blue-700 rounded-md px-4 hover:bg-blue-800 active:scale-95 duration-300"
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
