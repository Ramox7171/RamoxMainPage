import ProjectCardItem from './ProjectCardItem.jsx';
import '../style/CardContainer.scss';
import { motion } from 'framer-motion';
import { PROJECTS } from '../assets/store/DATA.js';

export default function CardContainer() {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring' }}>
      {PROJECTS.map((project) => (
        <ProjectCardItem
          key={project.id}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          stack={project.stack}
          git={project.github}
          live={project.live}
        />
      ))}
    </motion.div>
  );
}
