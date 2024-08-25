import { useEffect } from "../../import/ImportReacts.jsx";

export const useResize = () => {
  useEffect(() => {

    function handleResize() {
      let viewportWidth = window.innerWidth;

      // Create an array to store all class names
      let classNames = [];
      for (let i = 10; i <= 400; i += 10) {
        classNames.push('empty-' + i);
      }

      // Iterate over all class names
      classNames.forEach(function(className) {
          // Select all elements with the current class
          let elements = document.querySelectorAll('.' + className);

          // If viewport is less than or equal to 1200, remove class
          if(viewportWidth <= 1200) {
              elements.forEach(function(element) {
                  if (element.classList.contains(className)) {
                      element.classList.remove(className);
                  }
              });
          }

          // If viewport is greater than 1200, add class
          else {
              elements.forEach(function(element) {
                  if (!element.classList.contains(className)) {
                      element.classList.add(className);
                  }
              });
          }
      });
    }

    // Call the function at least once to set the correct class at the beginning
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};