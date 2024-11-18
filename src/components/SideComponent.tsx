import { useState, ReactNode } from 'react';
import './SideComponent.css';
import React from 'react';


interface SideComponentProps {
  side?: 'left' | 'right';  
  btnName: string;
  children?: ReactNode;    

}

const SideComponent: React.FC<SideComponentProps> = ({ side = 'right',btnName, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  
  const toggleMenu = () => {
    if (isOpen) {
      
      setIsClosing(true);
     const timeout = setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
     return clearTimeout(timeout) }, 500); 
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      {/*  Menu */}
      <button
  className={`side-component__button side-component__button--${side} ${isOpen ? 'is-open' : ''}`}
  onClick={toggleMenu}
>
  {isOpen ? 'Close' : `${btnName}`}
</button>
      {/* Menu boczne */}
      <div 
        className={`side-component__menu ${side} ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`} 
      >
        {isOpen && (
          <div className="side-component__content">
            {children ? children : ( 
              <ul className="side-component__list">
                <li><a href="#portraits">Portraits</a></li>
                <li><a href="#lifestyle">Lifestyle</a></li>
                <li><a href="#studio">Studio</a></li>
                <li><a href="#fashion">Fashion</a></li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideComponent;
