import { useState, useEffect } from "react";

const useMobileMenu = () => {
  const [mobile, setMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return { mobile, showMenu, toggleMenu };
};

export {useMobileMenu};