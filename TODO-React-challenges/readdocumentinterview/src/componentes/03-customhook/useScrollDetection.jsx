import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const useScrollDetection = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const prevScrollY = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    //console.log("Hello Ajit", window.scrollY);
    prevScrollY.current > window.scrollY
      ? setScrollDirection("UP")
      : setScrollDirection("DOWN");
    prevScrollY.current = window.scrollY;
  };

  return scrollDirection;
};

export default useScrollDetection;
