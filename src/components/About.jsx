import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useTheme } from '../context/ThemeContext';
import { FaAndroid, FaReact, FaServer, FaPen } from 'react-icons/fa';

const services = [
  {
    title: "Android Developer",
    icon: FaAndroid,
    description: "Building robust and user-friendly Android applications with modern architecture and best practices."
  },
  {
    title: "React Native Developer",
    icon: FaReact,
    description: "Creating cross-platform mobile applications with React Native for both iOS and Android."
  },
  {
    title: "Backend Developer",
    icon: FaServer,
    description: "Developing scalable backend solutions and RESTful APIs to power mobile applications."
  },
  {
    title: "Content Creator",
    icon: FaPen,
    description: "Creating engaging technical content and tutorials for the developer community."
  },
];

const ServiceCard = ({ index, title, icon: Icon, description }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className={`w-full sm:w-[250px] h-[320px] p-[1px] rounded-[20px] overflow-hidden`}
    >
      <div
        className={`h-full rounded-[20px] py-5 px-12 flex flex-col items-center transition-all duration-300 hover:scale-105`}
        style={{
          background: isDarkMode 
            ? 'linear-gradient(145deg, #151030, #2a1f5f)'
            : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        }}
      >
        <div className={`w-16 h-16 rounded-full flex justify-center items-center ${
          isDarkMode ? 'bg-black/20' : 'bg-[#915eff]/10'
        }`}>
          <Icon className={`w-8 h-8 ${
            isDarkMode ? 'text-white' : 'text-[#915eff]'
          }`} />
        </div>

        <h3 className={`text-[20px] font-bold text-center mt-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>

        <p className={`text-[14px] text-center mt-4 ${
          isDarkMode ? 'text-secondary' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? 'text-secondary' : 'text-gray-600'}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${
          isDarkMode ? 'text-secondary' : 'text-gray-600'
        }`}
      >
        I'm a skilled Android developer with experience in Java and Kotlin, and expertise in modern Android development practices. 
        I also work with React Native for cross-platform development and have backend development experience. 
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
