import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          I'm always interested in discussing new opportunities,
          collaborations, internships, and exciting software projects.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", marginTop: "64px" }}>
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass"
          style={{ flex: "1 1 400px", padding: "32px", boxSizing: "border-box", borderRadius: "24px" }}
        >
          <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-slate-400">samayfalguni1410@gmail.com</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-slate-400">Gujarat, India</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px", paddingTop: "24px" }}>
              <a
                href="https://github.com/SamayGandhi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="bg-slate-800 hover:bg-blue-600 transition"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "white", textDecoration: "none" }}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/samay-gandhi-1b468b2b8"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="bg-slate-800 hover:bg-blue-600 transition"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "white", textDecoration: "none" }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          ref={form}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass"
          style={{ flex: "1 1 400px", padding: "32px", boxSizing: "border-box", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <label className="sr-only" htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="bg-slate-900 border border-white/10 focus:border-blue-500 text-white transition"
            style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", boxSizing: "border-box" }}
          />

          <label className="sr-only" htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="bg-slate-900 border border-white/10 focus:border-blue-500 text-white transition"
            style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", boxSizing: "border-box" }}
          />

          <label className="sr-only" htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="bg-slate-900 border border-white/10 focus:border-blue-500 text-white transition"
            style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", boxSizing: "border-box" }}
          />

          <label className="sr-only" htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="bg-slate-900 border border-white/10 focus:border-blue-500 text-white transition"
            style={{ width: "100%", padding: "16px 20px", borderRadius: "12px", resize: "none", boxSizing: "border-box" }}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-block"
            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;