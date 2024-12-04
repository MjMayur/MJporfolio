import React, { useEffect, useRef, useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(formData.email).match(
      /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    );
  };

  //============Handle change=============
  const handleChange = (e) => {
    setErrMsg("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //========= Handle Focus Event for Inputs ============
  const handleFocus = (e) => {
    setErrMsg("");
  };

  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    // Validation logic
    if (!formData.name.trim()) return setErrMsg("Name is required!");
    if (!formData.phone.trim()) {
      return setErrMsg("Phone number is required!");
    } else if (!/^\d{10}$/.test(formData.phone)) {
      return setErrMsg("Enter a valid 10-digit phone number!");
    }
    if (!formData.email.trim()) {
      return setErrMsg("Email is required!");
    } else if (!emailValidation()) {
      return setErrMsg("Please enter a valid email address!");
    }
    if (!formData.message.trim()) return setErrMsg("Message is required!");

    // Success message
    if (errMsg === "") {
      setSuccessMsg(
        `Thank you ${formData.name}, Your message has been sent successfully!`
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSuccessMsg("");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Component is in view, set visibility to true
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
      ref={sectionRef} // Attach ref to the section
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Let's Work Together" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          {/* Only render the form if the component is visible */}
          {isVisible && (
            <div className="w-full lgl:w-[60%] h-full py-10 from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-2 lgl:p-8 rounded-lg bg-white ">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 ">
                <h4 className="text-2xl font-bold text-gray">Contact Us</h4>
                <div className="w-full h-[1px] text-center ">
                  {errMsg && (
                    <p className="text-[#F80000] text-base">{errMsg}</p>
                  )}
                  {successMsg && (
                    <p className="text-green-500 text-base">{successMsg}</p>
                  )}
                </div>
                <div className="w-full flex flex-col lgl:flex-row gap-10 pt-5">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      name="name"
                      onChange={(e) => handleChange(e)}
                      onFocus={handleFocus}
                      value={formData.name}
                      className={`color-white contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => handleChange(e)}
                      name="phone"
                      onFocus={handleFocus}
                      value={formData.phone}
                      className={`${
                        errMsg === "Phone number is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => handleChange(e)}
                    onFocus={handleFocus}
                    value={formData.email}
                    name="email"
                    className={`${
                      errMsg === "Please give your Email!"
                    } contactInput`}
                    type="email"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => handleChange(e)}
                    onFocus={handleFocus}
                    name="message"
                    value={formData.message}
                    className={`${
                      errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
