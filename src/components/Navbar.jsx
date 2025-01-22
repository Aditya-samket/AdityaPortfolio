import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${isDarkMode ? 'bg-primary' : 'bg-white'} transition-colors duration-300`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className={`text-[18px] font-bold cursor-pointer flex ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Aditya &nbsp;
            <span className="sm:block hidden">| Android Developer</span>
          </p>
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-white text-primary' : 'bg-primary text-white'} transition-colors duration-300`}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title  ? (isDarkMode ? 'text-white' : 'text-primary') : (isDarkMode ? 'text-secondary' : 'text-gray-600')
                } hover:${isDarkMode ? 'text-white' : 'text-primary'} text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[28px] h-[28px] object-contain cursor-pointer ${isDarkMode ? 'invert-0' : 'invert'}`}
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 ${isDarkMode ? 'black-gradient' : 'bg-white shadow-lg' } 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? (isDarkMode ? 'text-white' : 'text-primary')  : (isDarkMode ? 'text-secondary' : 'text-gray-600')
                    } font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
