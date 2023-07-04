import React, { useState, useEffect } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import './ScrollTop.css'

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <TiArrowSortedUp className='iconScroll'/>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;