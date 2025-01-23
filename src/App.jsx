import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { About, Experience, Tech, Works, Contact } from './components';
import Navbar from './components/Navbar';
import { styles } from './styles';
import { useTheme } from './context/ThemeContext';
import AdityaPhoto from './assets/Aditya.jpg';
import AdityaCv from './assets/AdityaPrasad.pdf';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const { isDarkMode } = useTheme();

  const handleDownloadCV = () => {
    // Replace 'your-cv.pdf' with your actual CV file path
    const link = document.createElement('a');
    link.href = AdityaCv;                                       
    link.download = 'Aditya Prasad Bhoi-CV.pdf';
    link.click();
  };

  return (
    <section className={`relative w-full h-screen mx-auto ${isDarkMode ? 'bg-primary' : 'bg-white'} transition-colors duration-300`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
          <div className="lg:w-1/2">
            <h1 className={`${styles.heroHeadText} ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Hello, I'm <span className="text-[#915eff]">Aditya Prasad Bhoi</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 ${isDarkMode ? 'text-white-100' : 'text-gray-600'} transition-colors duration-300`}>
              Passionate Android Developer | Turning Ideas into Intuitive Mobile Applications with a Focus on Seamless User Experience and Performance. <br className="sm:block hidden" />
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <button
                onClick={handleDownloadCV}
                className="bg-[#915eff] text-white px-6 py-3 rounded-full hover:bg-[#7f51e0] transition-colors duration-300"
              >
                Download CV
              </button>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Aditya-samket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-[#915eff] transition-colors duration-300`}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/aditya-prasad-bhoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-[#915eff] transition-colors duration-300`}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
              {/* Changed from rounded-full to rounded-lg for square with slightly rounded corners */}
              <div className="absolute inset-0 rounded-lg bg-[#915eff] opacity-25 blur-3xl animate-pulse" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full rounded-lg overflow-hidden border-4 border-[#915eff]"
              >
                <img
                  src={AdityaPhoto}
                  alt="Aditya"
                  className="w-full h-full object-cover object-center scale-100"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <BrowserRouter>
      <div className={`relative z-0 ${isDarkMode ? 'bg-primary' : 'bg-white'} transition-colors duration-300`}>
        <div className="hero-background">
          <div className={`bg-cover bg-no-repeat bg-center ${isDarkMode ? 'bg-opacity-50' : 'bg-opacity-30'}`}>
            <Navbar />
            <Home />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={isDarkMode ? 'dark' : 'light'}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
