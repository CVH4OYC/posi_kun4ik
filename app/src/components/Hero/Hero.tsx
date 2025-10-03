import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;
