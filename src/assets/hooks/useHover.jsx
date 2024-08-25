// useHover.jsx

import { useEffect } from "../../import/ImportReacts.jsx";

// -------------------------------------------------------------------------------------------------
export const useHover = () => {
  useEffect(() => {
    const textHovers = document.querySelectorAll(".text-hover");

    const handleMouseEnter = (event) => {
      const element = event.currentTarget;
      const computedStyle = getComputedStyle(element);
      const fontSize = parseFloat(computedStyle.fontSize);
      element.style.fontSize = `${fontSize + 3}px`;
    };

    const handleMouseLeave = (event) => {
      const element = event.currentTarget;
      element.style.fontSize = ""; // Reset font size
    };

    textHovers.forEach((textHover) => {
      textHover.style.transition = "font-size 0.1s ease-in-out";
      textHover.style.display = "inline-block";
      textHover.style.cursor = "pointer";
      textHover.style.caretColor = "transparent";

      textHover.addEventListener("mouseenter", handleMouseEnter);
      textHover.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners on unmount
    return () => {
      textHovers.forEach((textHover) => {
        textHover.removeEventListener("mouseenter", handleMouseEnter);
        textHover.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};
