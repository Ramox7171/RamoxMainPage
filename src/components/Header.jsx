import '../style/Header.scss';
import SocialButtons from './SocialButtons';

export default function Header() {
  return (
    <div className="header">
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
