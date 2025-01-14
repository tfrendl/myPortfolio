// Description: Scroll to top of the container on route change

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("center-overlay");
    if (container) {
      container.scrollTo(0, 0); // Scroll to the top of the container
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
