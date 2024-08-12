import '../style/Header.scss';
import SocialButtons from './SocialButtons';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__name'>
        <p className='header__name-text'>Mikołaj Lora</p>
        <p className='header__title'>Frontend Developer</p>
      </div>
      <menu>
        <button className='header__button-menu'>Home</button>
        <button className='header__button-menu'>Projects</button>
        <button className='header__button-menu'>Landings</button>
        <button className='header__button-menu'>About</button>
        <button className='header__button-menu'>Contact</button>
      </menu>
      <SocialButtons />
    </div>
  );
}
