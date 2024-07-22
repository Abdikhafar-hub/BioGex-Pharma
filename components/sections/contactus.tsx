'use client';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa6';
import Decor from './contactformdecor';
import { sendEmail } from '@/app/actions/sendMail';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await sendEmail(formData);
      if (response.success) {
        setSent(true);
        setError('');
        resetForm();
      } else {
        setError(response.error || 'Failed to send email');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-white py-20 px-8 md:px-20 overflow-hidden relative z-10">
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <SectionHeading
              tagline="contact"
              title="Contact Us"
              description="Get in touch with us"
            />
            <div className="mt-8 flex flex-col items-center w-full md:pl-40">
              {/* Contact Details */}
              <div className="flex items-center justify-start mb-6 w-full max-w-md">
                <FaMapMarkerAlt className="text-emerald-700 w-6 h-6 mr-4" />
                <p className="text-lg text-gray-600">Office 7, The Close, Ngara Road, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center justify-start mb-6 w-full max-w-md">
                <FaEnvelope className="text-emerald-700 w-6 h-6 mr-4" />
                <p className="text-lg text-gray-600">info@biogexpharma.com</p>
              </div>
              <div className="flex items-center justify-start mb-6 w-full max-w-md">
                <FaPhoneAlt className="text-emerald-700 w-6 h-6 mr-4" />
                <p className="text-lg text-gray-600">+254 748 763980</p>
              </div>
              <div className="flex items-center justify-start mb-6 w-full max-w-md">
                <FaWhatsapp className="text-emerald-700 w-6 h-6 mr-4" />
                <p className="text-lg text-gray-600">+254 748 763980</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         resize-none
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                         w-full
                         text-white
                         bg-emerald-700
                         rounded
                         border border-primary
                         p-3
                         transition
                         hover:bg-opacity-90
                         "
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
              <Decor />
              {sent && <p className="text-emerald-500 mt-4">Thank you. Message sent successfully! We will get back to you soon.</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
