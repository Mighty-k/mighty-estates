import { useState } from "react";
import Head from "next/head";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen bg-paper py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-ink mb-3">
              Get in Touch
            </h1>
            <p className="text-base text-slate max-w-2xl mx-auto leading-relaxed">
              Have questions about a property or need help finding your dream
              home? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-arch p-8">
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-ledger-tint border border-ledger/20 rounded-control text-ledger text-sm font-medium">
                  Thank you for your message! We will get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink mb-1.5"
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
                    className="w-full px-4 py-3 border border-line rounded-control text-ink bg-white input-arch text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-1.5"
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
                      className="w-full px-4 py-3 border border-line rounded-control text-ink bg-white input-arch text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-line rounded-control text-ink bg-white input-arch text-sm"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-ink mb-1.5"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-line rounded-control text-ink bg-white input-arch text-sm"
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
                    className="block text-sm font-medium text-ink mb-1.5"
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
                    className="w-full px-4 py-3 border border-line rounded-control text-ink bg-white input-arch text-sm resize-none"
                    placeholder="Tell us more about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-ledger text-white font-medium rounded-control hover:bg-ledger-dim transition-all shadow-soft active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card-arch p-8">
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-control bg-ledger-tint flex items-center justify-center flex-shrink-0 text-ledger">
                      <svg
                        className="w-5 h-5"
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
                      <h3 className="font-display font-semibold text-ink">
                        Head Office
                      </h3>
                      <p className="text-slate text-sm mt-1 leading-relaxed">
                        Victoria Island
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-control bg-ledger-tint flex items-center justify-center flex-shrink-0 text-ledger">
                      <svg
                        className="w-5 h-5"
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
                      <h3 className="font-display font-semibold text-ink">Phone</h3>
                      <p className="text-slate text-sm mt-1 leading-relaxed">
                        +234 000 123 4567
                        <br />
                        +234 111 222 3333
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-control bg-ledger-tint flex items-center justify-center flex-shrink-0 text-ledger">
                      <svg
                        className="w-5 h-5"
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
                      <h3 className="font-display font-semibold text-ink">Email</h3>
                      <p className="text-slate text-sm mt-1 leading-relaxed">
                        info@mightyestates.com
                        <br />
                        sales@mightyestates.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-arch p-8">
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                  Office Hours
                </h2>
                <div className="space-y-3 text-slate text-sm">
                  <div className="flex justify-between border-b border-line/60 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-ink">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-line/60 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-ink">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <span className="font-semibold text-ink">By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-ink rounded-structural p-8 text-white shadow-float border border-line/20">
                <h3 className="font-display text-xl font-bold mb-3">
                  List Your Property
                </h3>
                <p className="text-slate-2 text-sm mb-6 leading-relaxed">
                  Want to sell or rent your property? Get a free valuation from
                  our expert team.
                </p>
                <a
                  href="tel:+2348006337827"
                  className="inline-block px-6 py-3 bg-ledger text-white text-sm font-medium rounded-control hover:bg-ledger-dim transition-colors shadow-soft"
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
