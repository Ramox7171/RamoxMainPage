import { homepageText } from '../assets/store/DATA';
import '../style/HomePage.scss';
import { NavLink } from 'react-router-dom';
import reactlogo from '/img/react_logo.png';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0, x: 30 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}>
        <div className="react-logo">
          <img
            src={reactlogo}
            alt="react logo"
          />
        </div>
        <h3>{homepageText}</h3>
      </motion.div>
      <motion.section
        className="home__section--links"
        initial={{ opacity: 0, x: 30}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}>
        <NavLink
          to="projects"
          className="home__link">
          <h2>projects</h2>
        </NavLink>
        <NavLink
          to="about"
          className="home__link">
          <h2>about</h2>
        </NavLink>
      </motion.section>
    </>
  );
}
