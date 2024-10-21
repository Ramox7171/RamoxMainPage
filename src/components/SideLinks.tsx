import React from 'react';
import './SideLinks.css';

interface LinkProps {
    name: string;
    url: string;
    icon: string; 
}

interface SideLinksProps {
    links: LinkProps[];
    side: 'left' | 'right';
}

const SideLinks = ({ links, side }:SideLinksProps) => {
    return (
        <div className={`side-links side-links--${side}`}>
            {links.map((link, index) => (
                <a href={link.url} className="side-link" key={index}>
                    <img src={link.icon} alt={link.name} className="side-link__icon" />
                    <span className="side-link__text">{link.name}</span>
                </a>
            ))}
        </div>
    );
};

export default SideLinks;
