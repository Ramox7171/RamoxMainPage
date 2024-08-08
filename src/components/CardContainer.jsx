import ProjectCardItem from './ProjectCardItem.jsx';
import '../style/CardContainer.scss';
import {PROJECTS}  from '../assets/store/DATA.js';

// eslint-disable-next-line react/prop-types
export default function CardContainer() {
  return (
    <div className='card-container'>
      {PROJECTS.map((project) => (
        <ProjectCardItem
          key={project.id}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          stack={project.stack}
        />
      ))}
    </div>
  );
}
