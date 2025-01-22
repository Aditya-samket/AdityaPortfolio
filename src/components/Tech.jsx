import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FaJava, 
  FaAndroid, 
  FaGithub, 
  FaFigma,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiFirebase, 
  SiAndroidstudio, 
  SiJetpackcompose, 
  SiSqlite,
  SiPostman,
  SiGoogleplay,
  SiMaterialdesign
} from 'react-icons/si';

const technologies = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
  },
  {
    name: "Android",
    icon: FaAndroid,
  },
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
  },
  {
    name: "Jetpack Compose",
    icon: SiJetpackcompose,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "SQLite",
    icon: SiSqlite,
  },
  {
    name: "Room Database",
    icon: FaDatabase,
  },
  {
    name: "Material Design",
    icon: SiMaterialdesign,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
  {
    name: "Google Play Console",
    icon: SiGoogleplay,
  },
];

const TechCard = ({ index, name, icon: Icon }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      className={`w-24 h-24 rounded-xl ${
        isDarkMode 
          ? 'bg-tertiary' 
          : 'bg-white'
      } flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 group`}
      style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, #151030, #2a1f5f)'
          : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 transform transition-all duration-300 group-hover:-translate-y-1">
        <Icon className={`w-10 h-10 ${
          isDarkMode ? 'text-white' : 'text-[#915eff]'
        } transition-all duration-300 group-hover:text-[#915eff]`} />
        <span className={`text-xs font-medium ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        } transition-all duration-300 group-hover:text-[#915eff]`}>
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? 'text-secondary' : 'text-gray-600'}`}>
          My technical expertise
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {technologies.map((technology, index) => (
          <TechCard 
            key={technology.name} 
            index={index} 
            {...technology} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
