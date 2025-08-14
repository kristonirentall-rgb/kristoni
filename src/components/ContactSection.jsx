import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your name",
      });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address",
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a message",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Replace with your EmailJS Service ID, Template ID, and Public Key
      const serviceId = service_38sn7m9; // e.g., service_xxxxxxx
      const templateId = template_zc8jq9c; // e.g., template_xxxxxxx
      const publicKey = YjAndAI_X8b4dl4aB; // e.g., xxxxxxxxxxxxxxxx

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          className: "bg-green-500/90 text-white backdrop-blur-sm",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
    blur: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? We're excited to hear from you and explore new opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-blue-400" />,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:kristonirentall@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      kristonirentall@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <Phone className="h-6 w-6 text-blue-400" />,
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+233248548141"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      +233 24 854 8141 / +66 942 545 766
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="h-6 w-6 text-blue-400" />,
                  title: "Location",
                  content: (
                    <p className="text-gray-300">
                      HNO. 44, Arthur’s Mansion, Bort 261 St.<br />
                      Aplaku, Ga South, Greater Accra
                    </p>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="font-medium text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4 justify-center">
                {[
                  { href: "https://linkedin.com/in/your-profile", icon: <Linkedin className="h-6 w-6" /> },
                  { href: "https://x.com/your-profile", icon: <X className="h-6 w-6" /> },
                  { href: "https://instagram.com/your-profile", icon: <Instagram className="h-6 w-6" /> },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 p-8 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Your name..." },
                { id: "email", label: "Your Email", type: "email", placeholder: "your.email@example.com" },
              ].map((field) => (
                <motion.div
                  key={field.id}
                  variants={itemVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium mb-2 text-gray-200"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900/50 text-white focus:outline-none transition-all"
                    placeholder={field.placeholder}
                    variants={inputVariants}
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-200"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-600 bg-gray-900/50 text-white focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project or ideas..."
                  variants={inputVariants}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all",
                  isSubmitting && "opacity-75 cursor-not-allowed"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};