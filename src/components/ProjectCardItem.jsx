import PropTypes from 'prop-types';
import '../style/ProjectCardItem.scss';
export default function ProjectCardItem({ imgSrc, title, description, stack,git,live }) {
  return (
    <>
      <div className='project-card'>
        
        
        <img
          src={imgSrc}
          alt={title}
        />
        <div className='project-card__links-container'><a href={git} target='_blank' rel='noopener noreferrer'> GITHUB </a>
        <a href={live} target='_blank' rel='noopener noreferrer'> LIVE </a></div>
        <h3>{title}</h3>
        
        <p>{description}</p>
        
        <h4>Stack:</h4>
        <div className='project-card__skills-container'>
          {stack.map((skill, index) => (
            <p
              key={index}
              className='project-card__skill'>
              {skill}
            </p>
          ))}
          
        </div>
        
      </div>
    </>
  );
}

ProjectCardItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  git: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};
