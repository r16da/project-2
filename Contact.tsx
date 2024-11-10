import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-pink-400" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Contact Me</h2>
          <p className="text-gray-600 text-lg" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            Feel free to get in touch. I'd love to connect!
          </p>


          <div className="space-y-4">
            <div className="flex items-center gap-3" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <IoIosMail />
              <span>r15daa@gmail.com</span>
            </div>
            <div className="flex items-center gap-3" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <a
                href="linkedin.com/in/rida-f-2867a52ba
                      "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <span>linkedin.com/in/your-profile</span>
            </div>
            <div className="flex items-center gap-3" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <a
                href="developthrumylens"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <span>@developthrumylens</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">
              Your Name
            </label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-pink-400 rounded px-3"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              className="h-[40px] bg-transparent border border-pink-400 rounded px-3"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="msg" className="text-lg">
              Message
            </label>
            <textarea
              className="bg-transparent border border-pink-400 rounded px-3 py-2"
              id="msg"
              rows={8}
              placeholder="Write your message here..."
            />
          </div>
          <button className="bg-pink-400 text-white p-2 px-6 rounded hover:bg-accent-dark hover:bg-pink-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
