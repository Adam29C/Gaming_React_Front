import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [SideBarClass, setSideBarClass] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenuCollapsed = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
    setSideBarClass("menu-collasped-active");
  };


  return (
    <AppContext.Provider
      value={{
        isMenuCollapsed,
        toggleMenuCollapsed,
        SideBarClass,
        handleMouseEnter,
        handleMouseLeave,
        isHovered
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
