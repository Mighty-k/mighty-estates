import { useState } from "react";
import Head from "next/head";
// import Link from "next/link"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Head>
        <title>Contact Us | Mighty Estates</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Have questions about a property or need help finding your dream
              home? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-sm border border-charcoal-100 p-8">
              <h2 className="text-2xl font-semibold text-charcoal-900 mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-700">
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-charcoal-700 mb-1"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="buy">Buying a property</option>
                    <option value="rent">Renting a property</option>
                    <option value="sell">Selling my property</option>
                    <option value="list">
                      Listing my property for rent/sale
                    </option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Tell us more about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-charcoal-900 text-white font-medium rounded-md hover:bg-charcoal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-charcoal-100 p-8">
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900">
                        Head Office
                      </h3>
                      <p className="text-charcoal-600 mt-1">
                        Victoria Island
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900">Phone</h3>
                      <p className="text-charcoal-600 mt-1">
                        +234 000 123 4567
                        <br />
                        +234 111 222 3333
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900">Email</h3>
                      <p className="text-charcoal-600 mt-1">
                        info@mightyestates.com
                        <br />
                        sales@mightyestates.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-charcoal-100 p-8">
                <h2 className="text-2xl font-semibold text-charcoal-900 mb-6">
                  Office Hours
                </h2>
                <div className="space-y-3 text-charcoal-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  List Your Property
                </h3>
                <p className="text-white/80 mb-4">
                  Want to sell or rent your property? Get a free valuation from
                  our expert team.
                </p>
                <a
                  href="tel:+2348006337827"
                  className="inline-block px-6 py-3 bg-white text-accent font-medium rounded-md hover:bg-white/90 transition-colors"
                >
                  Call for Valuation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
