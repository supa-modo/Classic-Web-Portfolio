import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUp, ChevronRight } from "lucide-react";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { PiMapPinAreaDuotone, PiPhoneListDuotone } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    setErrorMessage("");

    // template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Eddy Odhiambo",
    };

    // Send email using EmailJS
    emailjs
      .send(
        "default_service", // Default service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        setSubmitError(true);
        setErrorMessage("Failed to send message. Please try again later.");
      });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="relative bg-slate-950 overflow-hidden z-40">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      {/* Animated orbs */}
      <div className="absolute top-20 -right-20 h-64 w-64 rounded-full bg-indigo-900/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-purple-900/30 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 pt-10 pb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo and info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 md:space-y-5">
              <div>
                <div className="flex space-x-3 md:space-x-5 items-center">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden w-12 h-9 md:w-16 md:h-12">
                    <img
                      src="/logo.gif"
                      alt="logo"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Eddy Ochieng Odhiambo
                  </h3>
                </div>

                <p className="mt-1 md:mt-2 text-sm md:text-base text-slate-400 max-w-md">
                  Fullstack Developer passionate about crafting modern web and
                  mobile applications with clean code and exceptional user
                  experiences.
                </p>
              </div>

              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <div className="flex items-center gap-3  text-slate-300">
                  <TbMailFilled className="h-5 w-5 text-indigo-400" />
                  <a
                    href="mailto:eddy@example.com"
                    className="hover:text-indigo-300 transition-colors hover:underline underline-offset-4"
                  >
                    eddyodhiambo11@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <PiPhoneListDuotone className="h-5 w-5 text-indigo-400" />
                  <a
                    href="tel:+254790193402"
                    className="hover:text-indigo-300 hover:underline underline-offset-4 transition-colors"
                  >
                    +254 790 193 402
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <PiMapPinAreaDuotone className="h-5 w-5 text-indigo-400" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <SocialLink
                  href="https://github.com/supa-modo"
                  icon={<FaGithub className="h-5 w-5" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/eddy-o-odhiambo"
                  icon={<FaLinkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://x.com/eddieoochieng"
                  icon={<FaSquareXTwitter className="h-5 w-5" />}
                  label="Twitter"
                />
                <SocialLink
                  href="https://wa.me/254790193402"
                  icon={<FaWhatsapp className="h-5 w-5" />}
                  label="WhatsApp"
                />
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <FooterLink href="#home" label="Home" />
              <FooterLink href="#skills" label="Skills" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#experience" label="Experience" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </motion.div>

          {/* Contact Me Form */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 md:mb-5">
              Contact Me
            </h4>
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm rounded-xl border border-slate-700/30 p-4 md:p-6 shadow-lg">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-full">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm sm:text-base px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    <div className="relative w-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm sm:text-base px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      rows="3"
                      className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-6 py-2.5 text-sm sm:text-base text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}

                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 md:mt-12 pt-3 md:pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Eddy Ochieng Odhiambo. All rights
            reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-8 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-indigo-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-300 transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-3 text-white shadow-lg hover:shadow-indigo-500/30 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}

// Helper components
function FooterLink({ href, label }) {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <a
        href={href}
        className="text-slate-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
      >
        <ChevronRight className="h-4 w-4 text-indigo-400 text-sm sm:text-base" />
        {label}
      </a>
    </motion.li>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex sm:h-10 sm:w-10 h-9 w-9 items-center justify-center rounded-full bg-slate-800/70 text-indigo-300 border border-slate-700/50 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
