import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // если есть хэш (#catalog, #concept и т.д.)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // плавный скролл
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // если просто "/", скроллим вверх
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
}
