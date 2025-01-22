import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { init, send } from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactInfo = ({ icon: Icon, title, content, link }) => {
  const { isDarkMode } = useTheme();
  return (
    <div 
      className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => link && window.open(link, '_blank')}
      style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, #151030, #2a1f5f)'
          : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isDarkMode ? 'bg-black/20' : 'bg-[#915eff]/10'
      }`}>
        <Icon className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-[#915eff]'}`} />
      </div>
      <div>
        <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-secondary' : 'text-gray-600'}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    init('mdD7-0Ohq2kUN8xff');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        to_name: 'Subhankar',
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        reply_to: form.email
      };

      await send(
        'service_0jn4pz8',
        'template_kcvz0rp',
        templateParams
      );

      toast.success('Thank you for your message! I will get back to you soon.');
      
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EMAILJS ERROR:', error);
      toast.error('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "adityabhoi80@gmail.com",
      link: "mailto:adityabhoi80@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Bhubaneswar, India"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 123-456-7890",
      link: "tel:+911234567890"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      content: "Check my repos",
      link: "https://github.com/yourusername"
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      content: "Follow me",
      link: "https://twitter.com/yourusername"
    }
  ];

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? 'text-secondary' : 'text-gray-600'}`}>
          Get in touch
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Contact.
        </h2>
      </motion.div>

      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] p-8 rounded-2xl"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(145deg, #151030, #2a1f5f)'
              : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
          }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Name
              </span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                  isDarkMode 
                    ? 'bg-tertiary placeholder:text-secondary text-white'
                    : 'bg-white placeholder:text-gray-400 text-gray-900'
                }`}
              />
            </label>
            <label className="flex flex-col">
              <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Email
              </span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                  isDarkMode 
                    ? 'bg-tertiary placeholder:text-secondary text-white'
                    : 'bg-white placeholder:text-gray-400 text-gray-900'
                }`}
              />
            </label>
            <label className="flex flex-col">
              <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                  isDarkMode 
                    ? 'bg-tertiary placeholder:text-secondary text-white'
                    : 'bg-white placeholder:text-gray-400 text-gray-900'
                }`}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl ${
                isDarkMode ? 'bg-tertiary hover:bg-[#915eff]' : 'bg-[#915eff] hover:bg-[#7d4ed3]'
              } transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h3 className={`text-[20px] font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={`text-[20px] font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Social Links
            </h3>
            {socialLinks.map((link, index) => (
              <ContactInfo key={index} {...link} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
