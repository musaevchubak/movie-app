import React from 'react';
import  style from './Header.module.css';

const Header = () => {
  return (
    <span className={style.header} onClick={() => window.scroll(0 ,0 )}>🎬 ENTERTAINMENT HUB  🎥</span>
  );
};

export default Header;
