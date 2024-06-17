import React, { useState, useEffect } from "react";
import "../App.css";

export const NavigationBar = ({ homeRef, aboutRef, projectsRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref, offset = 0) => {
    if(ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const handleNavigationClick = (index) => {
    setActiveIndex(index);
    switch(index) {
      case 0:
        scrollToSection(homeRef);
        break;
      case 1:
        scrollToSection(aboutRef, 30);
        break;
      case 2:
        scrollToSection(projectsRef, 40);
        break;
      default:
        break;
    }
  };

  const navigatorItems = [
    { 
      name: "Home" 
    },
    { 
      name: "About" 
    },
    { 
      name: "Projects" 
    },
  ];

  const navLinksClass = isScrolled ? "nav-links-filled" : "nav-links";
  const navSliderClass =
    activeIndex !== null ? `nav-slider ${navigatorItems[activeIndex].name}` : "nav-slider";

  return (
    <div className="nav">
      <div className={navLinksClass}>
        {navigatorItems.map((item, index) => (
          <span key={index} onClick={() => handleNavigationClick(index)} className={`nav-links-item ${activeIndex === index ? "active" : ""}`}>
            {item.name}
          </span>
        ))}
        <div className={navSliderClass} />
      </div>
    </div>
  );
};

export default NavigationBar;
