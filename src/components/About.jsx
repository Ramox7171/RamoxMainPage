import '../style/About.scss';
import { SKILLS,bioText } from '../assets/store/DATA.js';
import SocialButtons from './SocialButtons';





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
