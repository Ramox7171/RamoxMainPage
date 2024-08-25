import '../style/Header.scss';
import SocialButtons from './SocialButtons';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__name'>
        <p className='header__name-text'>Mikołaj Lora</p>
        <p className='header__title'>Frontend Developer</p>
      </div>
      <menu>
        <NavLink
          to='/'
          className='header__button-menu'
          end>
          Home
        </NavLink>
        <NavLink
          to='/projects'
          className='header__button-menu'>
          Projects
        </NavLink>
        {/* <NavLink
          to='/blog'
          className='header__button-menu'>
          Blog
        </NavLink> */}
        <NavLink
          to='/about'
          className='header__button-menu'>
          About
        </NavLink>
        <NavLink
          to='/contact'
          className='header__button-menu'>
          Contact
        </NavLink>
      </menu>
      <SocialButtons />
    </div>
  );
}
