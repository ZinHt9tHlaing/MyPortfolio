import {
  AboutPage,
  HeroPage,
  NavMobilePage,
  NavPage,
  ProjectPage,
  ServicesPage,
} from "@/components";

import React, { useState } from "react";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className=" overflow-hidden">
      <NavMobilePage showNav={showNav} closeNav={closeNavHandler} />
      <NavPage openNav={showNavHandler} />
      {/* Hero section */}
      <HeroPage />
      <AboutPage />
      <ProjectPage />
    </div>
  );
};

export default HomePage;
