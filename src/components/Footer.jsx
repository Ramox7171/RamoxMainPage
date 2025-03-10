import '../style/Footer.scss';
import camera from '../assets/icons/camera.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <span>© Copyright 2024 Mikołaj Lora</span>
      <NavLink to="/foto"><span><img src={camera} alt="camera icon" /></span></NavLink>
    </footer>
  );
}
