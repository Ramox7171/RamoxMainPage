import '../style/About.scss';
import { SKILLS,bioText } from '../assets/store/DATA.js';
import SocialButtons from './SocialButtons';





export default function About() {
  return (
    <>
      <section className='about__hero'>
        <h1>
          Hustle in silence <br />
          and let your success <br />
          make the noise.
        </h1>
      </section>
      <section className='about__content'>
        <div className='about__skills'>
        
          {SKILLS.map((skill) => (
            <p
              key={skill.id}
              className='about__skill'>
              {skill.skill}
            </p>
          ))}
        </div>
        <div className='about__photo'>
        <img src='/img/ramox.jpg' alt='Ramox' />
        </div>
        <div className='about__text'>
          <h3>About</h3>
          <p>{bioText}</p>
          <h4>You can say hello here : </h4>
          
          <SocialButtons className='about__social' />
          
        </div>
        
      </section> 
     
    </>
  );
}
