"use client";
import { useState } from "react";
import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"
import { Link } from "@/app/components/link"

export default function ContactPage() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });

    const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyOJkV1rTX1atEzwe8MVAB_cKKnx4411r0MMMfTxYifKGZhPW3u42-BvIDRWl88Joc4/exec";

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("industry", formData.industry);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("timestamp", new Date().toLocaleString());

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      setFormData({
        fullName: "",
        email: "",
        company: "",
        industry: "",
        message: "",
      });

      alert("Thank you! Your message has been sent.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
    setIsSubmitting(false);
  }
  };

  function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 animate-spin"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

    return (
        <main className="min-h-screen">
            <PageTitle title="Contact Us" />
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="p-5 sm:p-10 text-lg flex flex-col gap-10">
                    <span>
                        We engage with producers, consumers, and market participants to
                        structure efficient gas supply and trading outcomes. Get in touch to
                        explore commercial discussions or negotiated arrangements.
                    </span>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-500 font-bold">FULL NAME</p>
                            <input 
                                type="text" 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="border w-full focus:outline-none p-2" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-500 font-bold">EMAIL</p>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border w-full focus:outline-none p-2" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-500 font-bold">COMPANY</p>
                            <input 
                                type="text" 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="border w-full focus:outline-none p-2" 
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-500 font-bold">INDUSTRY</p>
                            <select 
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                style={{ appearance: "none"}} 
                                className="border w-full focus:outline-none p-2"
                                required
                            >
                                <option value="">--Select your industry--</option>
                                <option value="energy-production">Energy Production</option>
                                <option value="distribution">Distribution</option>
                                <option value="oil-gas">Oil & Gas</option>
                                <option value="petrochemicals">Petrochemicals</option>
                                <option value="utilities">Utilities</option>
                                <option value="industrial">Industrial Manufacturing</option>
                                <option value="trading">Commodity Trading</option>
                                <option value="shipping">Shipping & Logistics</option>
                                <option value="financial">Financial Services</option>
                                <option value="financial">Software</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-500 font-bold">MESSAGE</p>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border w-full focus:outline-none p-2 min-h-[120px]" 
                                required
                            />
                        </div>
                        <span onClick={() => {console.log("yo")}}>
                            <span className={`inline-flex items-center justify-center gap-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}>
                                {isSubmitting ? (
                                    <>
                                    <Spinner />
                                    <span>Sending…</span>
                                    </>
                                ) : (
                                    <Button label="Send message" type="light" />
                                )}
                            </span>
                        </span>
                    </form>
                </div>
                <div className="flex flex-col gap-10 text-lg">
                    <div className="flex flex-col xl:bg-black xl:text-white p-5 sm:p-10">
                        <span className="font-semibold text-xl text-gray-500">Email:</span>
                        <span>contact@intergas.com.au</span>
                        <br />
                        <span className="font-semibold text-xl text-gray-500">Business Hours</span>
                        <span>Monday - Friday</span>
                        <span>9:00 am - 6:00pm AEST</span>
                        <br />
                        <span className="font-semibold text-xl text-gray-500">Location:</span>
                        <span>Sydney, NSW, Australia</span>
                        <br />
                        <span className="font-semibold text-xl text-gray-500">Social:</span>
                        <Link title="𝕏" link="https://www.x.com/intergas_energy"/>
                        <Link title="Instagram" link="https://www.instagram.com/intergas_energy"/>
                        <Link title="LinkedIn" link="https://www.linkedin.com/company/intergas-energy"/>
                    </div>
                    {/* <img className="hidden lg:block" src="/sydney-dark.jpg" /> */}
                </div>
            </div>
        </main>
    )
}