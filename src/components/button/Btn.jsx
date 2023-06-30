import React from 'react';
import './Btn.css';

const Btn = ({ outline, children }) => {
  const buttonClassName = outline ? 'button outline' : 'button full';

  return (
    <button className={buttonClassName}>
      {children}
    </button>
  );
};

export default Btn;