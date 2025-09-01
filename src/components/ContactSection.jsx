import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ variant: "destructive", title: "Error", description: "Please enter your name" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a valid email" });
      return false;
    }
    if (!formData.message.trim()) {
      toast({ variant: "destructive", title: "Error", description: "Please enter a message" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");
    try {
      // Use strings for your EmailJS credentials
      const serviceId = "service_38sn7m9";
      const templateId = "template_zc8jq9c";
      const publicKey = "YjAndAI_X8b4dl4aB";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setStatus("success");
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          className: "bg-green-500/90 text-white backdrop-blur-sm",
        });
        setFormData({ name: "", email: "", message: "" });

        // Reset back to idle after 3s
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });

      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. We are always open to discussing 
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
{/* Contact Details */}
<div className="space-y-6">
  {/* Phone */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-full">
      <Phone className="text-blue-400" size={20} />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="text-white font-semibold text-sm md:text-base mb-1">Phone</h4>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        +233 24 854 8141<br />
        +66 942 545 766
      </p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-purple-500/10 p-3 rounded-full">
      <Mail className="text-purple-400" size={20} />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="text-white font-semibold text-sm md:text-base mb-1">Email</h4>
      <p className="text-gray-300 text-sm md:text-base break-all md:break-normal">
        kristonirentall@gmail.com
      </p>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-green-500/10 p-3 rounded-full">
      <MapPin className="text-green-400" size={20} />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="text-white font-semibold text-sm md:text-base mb-1">Location</h4>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        HNO. 44, Arthur's Mansion<br />
        Bort 261 St. Aplaku<br />
        Ga South, Greater Accra
      </p>
    </div>
  </div>
</div>
            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700/50 hover:bg-blue-600/20 p-3 rounded-full transition-colors border border-gray-600/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white" size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700/50 hover:bg-pink-600/20 p-3 rounded-full transition-colors border border-gray-600/50"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700/50 hover:bg-gray-600/20 p-3 rounded-full transition-colors border border-gray-600/50"
                  aria-label="GitHub"
                >
                  <Github className="text-white" size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700/50 hover:bg-red-600/20 p-3 rounded-full transition-colors border border-gray-600/50"
                  aria-label="Email"
                >
                  <Mail className="text-white" size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/50 p-8 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Your name..."
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell us about your project or ideas..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-md text-white transition-all",
                  status === "idle" &&
                    "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
                  status === "loading" && "bg-blue-500/70 cursor-not-allowed",
                  status === "success" && "bg-green-500",
                  status === "error" && "bg-red-500"
                )}
                whileHover={{ scale: status === "idle" ? 1.05 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.95 : 1 }}
              >
                <AnimatePresence mode="wait">
                  {status === "loading" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4..."
                        />
                      </svg>
                      Sending...
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle size={18} />
                      Failed. Try Again.
                    </motion.div>
                  )}
                  {status === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};