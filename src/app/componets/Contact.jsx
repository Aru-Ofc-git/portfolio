"use client";
import { FaPaperPlane } from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";
import { Raleway } from "next/font/google";
import { useState } from "react";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  var [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  var [emailSent, setEmailSent] = useState(false);

  // handle
  const handleEvent = (e) => {
    console.log(e);
    var { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    var res = await fetch("/contact/email", {
      method: "post",
      body: JSON.stringify(data),
    });
    var response = await res.json();
    if (response.success) {

      setEmailSent(true);
    }else{
      setEmailSent(false);
    }
  };
  const closeModal = () => {
    setData({ name: "", email: "", message: "" });
    setEmailSent(false);
  };
  return (
    <>
      <div
        className={`bg-[#FAFAFA] flex justify-center flex-wrap ${raleway.className} pt-24 overflow-hidden`}
      >
        <div className="md:px-24 px-14 md:py-5 py-2 md:my-5 md:border-4 border-2 border-black font-bold md:text-2xl block">
          Send Message
        </div>
        <div className="text-[#050505] w-full py-5 mx-5 flex justify-center">
          <p>Please write your message and send me.</p>
        </div>
        <div className="text-[#050505] w-full py-5 mx-5  ">
          <form action="" onSubmit={submitForm}>
            <div className="w-full flex justify-center items-center flex-wrap ">
              <div className="relative w-full left-[-0.7rem] md:left-[32%]">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={data.name}
                  onChange={handleEvent}
                  id="name"
                  className={`peer text-xlfont-medium w-[90%] md:w-1/3 mx-7 py-3 border-2 border-gray-300 rounded-md px-3 focus:border-orange-600 outline-none ${
                    data.name.length ? "border-orange-600" : ""
                  }`}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute top-3 left-10 peer-focus:top-[-0.9rem] text-xl ease-in-out duration-300 peer-placeholder-shown:top-3 peer-focus:text-xl px-1.5 peer-focus:text-black peer-focus:bg-[#FAFAFA] peer-placeholder-shown:text-gray-500 ${
                    data.name.length
                      ? "top-[-0.9rem] text-sm text-black bg-white"
                      : ""
                  } `}
                >
                  Enter Name
                </label>
              </div>

              <div className="relative w-full left-[-0.7rem] md:left-[32%] my-7">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={data.email}
                  onChange={handleEvent}
                  id="email"
                  className={`peer text-xlfont-medium w-[90%] md:w-1/3 mx-7 py-3 border-2 border-gray-300 rounded-md px-3 focus:border-orange-600 outline-none ${
                    data.email.length ? "border-orange-600" : ""
                  }`}
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute top-3 left-10 peer-focus:top-[-0.9rem] text-xl ease-in-out duration-300 peer-placeholder-shown:top-3 peer-focus:text-xl px-1.5 peer-focus:text-black peer-focus:bg-[#FAFAFA] peer-placeholder-shown:text-gray-500 ${
                    data.email.length
                      ? "top-[-0.9rem] text-sm text-black bg-white"
                      : ""
                  } `}
                >
                  Enter Email
                </label>
              </div>

              <div className="relative w-full left-[-0.7rem] md:left-[32%] ">
                <textarea
                  rows="4"
                  name="message"
                  placeholder=" "
                  value={data.message}
                  onChange={handleEvent}
                  id="message"
                  className={`peer text-xlfont-medium w-[90%] md:w-1/3 mx-7 py-2 border-2 border-gray-300 rounded-md px-3 focus:border-orange-600 outline-none ${
                    data.message.length ? "border-orange-600" : ""
                  }`}
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute top-3 left-10 peer-focus:top-[-0.9rem] text-xl ease-in-out duration-300 peer-placeholder-shown:top-3 peer-focus:text-xl px-1.5 peer-focus:text-black peer-focus:bg-[#FAFAFA] peer-placeholder-shown:text-gray-500 ${
                    data.message.length
                      ? "top-[-0.9rem] text-sm text-black bg-white"
                      : ""
                  } `}
                >
                  Enter Message
                </label>
              </div>
              <div className="relative w-full left-6 md:left-[34%] my-7">
                <button
                  type="submit"
                  className="flex justify-start gap-2.5 bg-black text-white font-bold px-10 py-3 rounded-3xl text-base cursor-pointer ease-in-out duration-300 hover:bg-orange-600 items-center shadow-md hover:shadow-lg"
                >
                  <FaPaperPlane />
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>


        {emailSent && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm animate-in fade-in">
    <div className="mx-4 max-w-[95vw] md:max-w-[90vw] w-full sm:w-auto flex justify-center items-center">
      <div className="relative max-h-[90vh] overflow-y-auto md:h-[28rem] md:w-[28rem] h-[min(24rem,90vh)] w-[min(24rem,95vw)] flex justify-center items-center bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-100 transition-all duration-300">
        <div className="flex flex-col items-center px-4 py-8 space-y-6 md:px-8 md:py-12 md:space-y-8">
          <div className="animate-bounce-in">
            <LiaCheckCircle className="h-20 w-20 md:h-32 md:w-32 text-emerald-500/90 drop-shadow-lg transition-transform duration-300 hover:scale-105" />
          </div>

          <div className="space-y-3 md:space-y-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-600/90 tracking-tight">
              Success!
            </h3>
            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-[85%] mx-auto">
              Your message has been successfully sent. We'll respond shortly!
            </p>
          </div>

          <button
            className="py-3 px-8 md:py-3.5 md:px-14 bg-emerald-500/90 hover:bg-emerald-600 text-white font-semibold text-base md:text-lg rounded-lg md:rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-200 cursor-pointer"
            onClick={closeModal}
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </>
  );
};

export default Contact;
