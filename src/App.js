
import './App.css';
import React, { useState, useEffect } from "react";



function App() {
  
  const [scrollPosition, setScrollPosition] = useState(0);

const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    }, []);
  return (
    <div>
		  <div className={scrollPosition > 100 ? "scroll-text" : "scrolled-text"}>스크롤되면 색이 변합니다!</div>
    </div>
  )
}


export default App;
