import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader bgTitle="Contact" frontTitle="Contact Me" />

        <div className="max-w-3xl mx-auto">
          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-teal-50 border border-[#0BCEAF] text-[#078571] text-center font-medium shadow-sm transition-all">
              <i className="fa fa-check-circle mr-2 text-lg"></i>
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5 text-center">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="text-left">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-[25px] border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:border-[#0BCEAF] text-gray-700 bg-white shadow-sm transition-all placeholder:text-gray-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 ml-4 font-medium">{errors.name}</p>
                )}
              </div>

              <div className="text-left">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-[25px] border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:border-[#0BCEAF] text-gray-700 bg-white shadow-sm transition-all placeholder:text-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 ml-4 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="text-left">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-[25px] border ${
                  errors.subject ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-[#0BCEAF] text-gray-700 bg-white shadow-sm transition-all placeholder:text-gray-400`}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1.5 ml-4 font-medium">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="text-left">
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-6 py-4 rounded-[25px] border ${
                  errors.message ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-[#0BCEAF] text-gray-700 bg-white shadow-sm transition-all placeholder:text-gray-400 resize-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5 ml-4 font-medium">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-block border border-[#0BCEAF] text-[#0BCEAF] hover:bg-[#0BCEAF] hover:text-white px-8 py-3 rounded-sm font-semibold transition-all duration-300 text-base shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
