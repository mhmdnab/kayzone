"use client";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      alert("Server error.");
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#6e34cf] to-[#eaeaea] px-4 pt-32 pb-16 flex justify-center">
      <div className="w-full max-w-[600px] bg-white shadow-2xl rounded-2xl px-8 py-10 md:px-10 md:py-12">
        <h2 className="text-3xl font-bold text-[#6e34cf] mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6e34cf]"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6e34cf]"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#6e34cf]"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-[#6e34cf] text-white py-3 px-6 rounded-lg hover:bg-[#5a29ab] transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
