import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`relative w-full h-[450px] p-5 rounded-2xl sm:w-[360px] transition-all duration-300 hover:scale-105`}
        style={{
          background: isDarkMode 
            ? 'linear-gradient(145deg, #151030, #2a1f5f)'
            : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        }}
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 backdrop-blur-sm"
            >
              <img
                src="/github.png"
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 backdrop-blur-sm"
              >
                <img
                  src="/link.png"
                  alt="live link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className={`text-[24px] font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {name}
          </h3>
          <p className={`mt-2 text-[14px] line-clamp-3 ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] px-2 py-1 rounded-full ${
                  isDarkMode 
                    ? 'bg-black/30 text-secondary'
                    : 'bg-[#915eff]/10 text-[#915eff]'
                }`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isDarkMode ? 'text-secondary' : 'text-gray-600'}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}
        >
          Following projects showcases my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos. 
          It reflects my ability to solve complex problems, work with different technologies, 
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
