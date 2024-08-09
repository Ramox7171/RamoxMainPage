import '../style/About.scss';
import { SKILLS } from '../assets/store/DATA.js';
import SocialButtons from './SocialButtons';


const bioText =
  'I am an experienced professional with a diverse technical background, including roles as a computer technician, Delphi developer, and technical support specialist. Currently, I am passionately returning to programming as a FrontEnd Developer, dedicating every free moment to exploring the vast world of JavaScript.I possess excellent communication skills, the ability to work well in a team, and a high level of professionalism. I am punctual, goal-oriented, and ready for new challenges as a Frontend Developer.';

export default function About() {
  return (
    <>
      <section className='hero'>
        <h1>
          Hustle in silence <br />
          and let your success <br />
          make the noise.
        </h1>
      </section>
      <section className='content'>
        <div className='skills'>
        
          {SKILLS.map((skill) => (
            <p
              key={skill.id}
              className='skill'>
              {skill.skill}
            </p>
          ))}
        </div>
        <div className='photo'>
        <img src='/img/ramox.jpg' alt='Ramox' />
        </div>
        <div className='about-text'>
          <h3>About</h3>
          <p>{bioText}</p>
          <h4>You can say hello here : </h4>
          
          <SocialButtons className='social' />
          
        </div>
        
      </section> 
     
    </>
  );
}
