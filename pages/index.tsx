import {
  AboutPage,
  ContactPage,
  FooterPage,
  HeroPage,
  NavMobilePage,
  NavPage,
  ProjectPage,
} from "@/components";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  // animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  });

  return (
    <div className=" overflow-hidden">
      <NavMobilePage showNav={showNav} closeNav={closeNavHandler} />
      <NavPage openNav={showNavHandler} />
      {/* Hero section */}
      <HeroPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default HomePage;
