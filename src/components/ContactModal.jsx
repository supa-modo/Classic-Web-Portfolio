import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+254700000000",
      color: "#25D366",
      label: "WhatsApp",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/your_username",
      color: "#1DA1F2",
      label: "Twitter (X)",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/your_profile",
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/your_profile",
      color: "#0A66C2",
      label: "LinkedIn",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm font-poppins px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#dfe9f3] to-[#F0F9FF] rounded-2xl p-8 w-full max-w-xl relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </h2>

              <p className="text-gray-500 text-sm">
                Send me a message or enquiry and I will get back to you as soon
                as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500 mb-2 text-left"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5  text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-600 dark:text-white transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500 mb-2 text-left"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-600 dark:text-white resize-none transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-br from-primary/60 to-secondary text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span className="">Send Message</span>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Social Links Section */}
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Or find me on my socials
                </p>
                <div className="flex justify-center items-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title={link.label}
                    >
                      <div
                        className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: link.color }}
                      />
                      <link.icon
                        size={24}
                        className="transition-transform duration-300 group-hover:scale-110"
                        style={{ color: link.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
