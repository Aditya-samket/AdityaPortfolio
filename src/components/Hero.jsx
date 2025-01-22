import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useTheme } from '../context/ThemeContext';
import AdityaPhoto from '../assets/Aditya.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const SocialLink = ({ href, icon: Icon }) => {
  const { isDarkMode } = useTheme();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-[#915eff]/10 hover:bg-[#915eff]/20'
      }`}
    >
      <Icon className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-[#915eff]'}`} />
    </a>
  );
};

const Hero = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { href: "https://github.com/yourusername", icon: FaGithub },
    { href: "https://linkedin.com/in/yourusername", icon: FaLinkedin },
    { href: "https://twitter.com/yourusername", icon: FaTwitter }
  ];

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 ${styles.paddingX}`}>
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start justify-start lg:w-1/2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            
            <div>
              <h1 className={`${styles.heroHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm <span className="text-[#915eff]">Aditya</span>
              </h1>
              <div className={`${styles.heroSubText} mt-2 ${isDarkMode ? 'text-white-100' : 'text-gray-600'}`}>
                I'm a{' '}
                <TypeAnimation
                  sequence={[
                    'Mobile Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Android Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-[#915eff]"
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          <p className={`mt-8 text-[18px] max-w-lg ${isDarkMode ? 'text-white-100/70' : 'text-gray-600'}`}>
            Passionate about creating beautiful and functional mobile applications. 
            Specializing in Android development with expertise in modern technologies 
            and best practices.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => window.open("/your-resume.pdf", "_blank")}
              className={`py-3 px-8 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-[#915eff] hover:bg-[#7d4ed3]' : 'bg-[#915eff] hover:bg-[#7d4ed3]'
              }`}
            >
              Download CV
            </button>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
        >
          <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
            <div className={`absolute inset-0 rounded-full ${
              isDarkMode ? 'bg-[#915eff]' : 'bg-[#915eff]'
            } opacity-20 blur-3xl animate-pulse`} />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#915eff]"
            >
              <img
                src={AdityaPhoto}
                alt="Aditya"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
