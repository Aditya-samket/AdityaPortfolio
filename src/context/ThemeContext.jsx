import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize from localStorage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    
    // Update document class for theme-specific styles
    document.documentElement.classList.toggle('light', !isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
