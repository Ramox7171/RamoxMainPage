import '../style/About.scss';
import { SKILLS, bioText } from '../assets/store/DATA.js';
import SocialButtons from './SocialButtons';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <motion.section
        className="about__hero"
        initial={{ opacity: 0, x: 0 }}
        animate={{ x: -30, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}>
        <h1>
          Hustle in silence <br />
          and let your success <br />
          make the noise.
        </h1>
      </motion.section>
      <motion.section
        className="about__content"
        initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
        <div className="about__skills">
          {SKILLS.map((skill) => (
            <p
              key={skill.id}
              className="about__skill">
              {skill.skill}
            </p>
          ))}
        </div>
        <div className="about__photo">
          <img
            src="/img/ramox.jpg"
            alt="Ramox"
          />
        </div>
        <div className="about__text">
          <h3>About</h3>
          <p>{bioText}</p>
          <h4>You can say hello here : </h4>

          <SocialButtons className="about__social" />
        </div>
      </motion.section>
    </>
  );
}
