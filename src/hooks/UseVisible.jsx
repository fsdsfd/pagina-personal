import { useState, useEffect } from "react";

const UseVisible = () => {
    const [isVisible, setIsVisible] = useState(() => {
        return localStorage.getItem("hasLoaded") ? false : true;
      });
    
      useEffect(() => {
        if (isVisible) {
          setTimeout(() => {
            setIsVisible(false);
            localStorage.setItem("hasLoaded", "true");
          }, 1000);
        }
      }, [isVisible]);
    
      return isVisible;
    
};

export default UseVisible;