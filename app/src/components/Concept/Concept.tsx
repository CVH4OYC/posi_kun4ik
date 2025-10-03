import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import ConceptDesktop from "./ConceptDesktop";
import ConceptMobile from "./ConceptMobile";

const Concept: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ConceptMobile /> : <ConceptDesktop />;
};

export default Concept;
