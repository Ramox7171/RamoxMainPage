import '../style/Header.scss';
import SocialButtons from './SocialButtons';

export default function Header() {
  return (
    <div className="header">
      <div className='header__name'>
        <p className='name'>Mikołaj Lora</p>
        <p className='title'>Frontend Developer</p>
      </div>
      <menu>
        <button className="button-menu">Home</button>
        <button className="button-menu">Projects</button>
        <button className="button-menu">Landings</button>
        <button className="button-menu">About</button>
        <button className="button-menu">Contact</button>
      </menu>
      <SocialButtons />
    </div>
  );
}
