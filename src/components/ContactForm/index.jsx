"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
      request: "",
      message: "",
    },
    validationSchema: Yup.object({
      request: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      console.log(values);
      try {
        await emailjs.send(
          "service_3uv64gf",
          "template_pkr9be5",
          {
            email: values.email,
            request: values.request,
            message: values.message,
          },
          "wAGnrheDKHTnBYmTm"
        );
        toast({
          description: "Your message has been sent successfully!",
        });
        resetForm();
      } catch (error) {
        console.error("Failed to send message:", error);
        toast({
          variant: "destructive",
          description: "Failed to send message. Please try again!",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="w-screen md:w-[504.42px] bg-transparent md:rounded-[10px] px-6 md:px-12 py-16">
      <div className="mt-6">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="bg-white rounded-md rounded-br-none border border-white text-black text-base focus:outline-none focus:ring-transparent focus:border-[#FFA217] block w-full p-3"
              placeholder="Please enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="mb-6">
            <label htmlFor="request" className="block mb-2 text-lg text-white">
              Request
            </label>
            <input
              type="text"
              id="request"
              {...formik.getFieldProps("request")}
              className="bg-white rounded-md rounded-br-none border border-white text-black text-base focus:outline-none focus:ring-transparent focus:border-[#FFA217] block w-full p-3"
              placeholder="Enter subject of request"
            />
            {formik.touched.request && formik.errors.request ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.request}
              </div>
            ) : null}
          </div>

          <div className="mb-6 flex flex-col">
            <label htmlFor="message" className="block mb-2 text-lg text-white">
              Message
            </label>
            <textarea
              id="message"
              {...formik.getFieldProps("message")}
              rows="4"
              className="bg-white rounded-md rounded-br-none border border-white text-black text-base focus:outline-none focus:ring-transparent focus:border-[#FFA217] block w-full p-3"
              placeholder="Enter your message"
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-400 text-xs mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="px-5 py-3 bg-[#FFA217] rounded-md rounded-br-none w-full justify-center items-center flex gap-3"
            disabled={loading}
          >
            <span className="text-center text-lg text-[#020203] font-bold">
              {loading ? "Sending..." : "Submit"}
            </span>
            <img
              src="/icons/angle-right-black.svg"
              alt="icon"
              className="ml-2"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
