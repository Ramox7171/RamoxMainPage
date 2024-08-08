import facebook from '../assets/icons/Facebook.png';
import github from '../assets/icons/Github.png';
import instagram from '../assets/icons/Instagram.png';
import linkedin from '../assets/icons/Linkedin.png';

// eslint-disable-next-line react/prop-types
export default function SocialButtons({ className = "socialbuttons" })  {
  const fb = 'https://www.facebook.com/treadstoneassasin';
  const git = 'https://github.com/Ramox7171';
  const insta = 'https://www.instagram.com/ra.mox/';
  const linked = 'https://www.linkedin.com/in/mikolaj-lora/';

  return (
    <div className={className}>
      <a href={linked}>
        <img
          src={linkedin}
          alt='linkedin'
        />
      </a>
      <a href={git}>
        <img
          src={github}
          alt='github'
        />
      </a>
      <a href={insta}>
        <img
          src={instagram}
          alt='instagram'
        />
      </a>
      <a href={fb}>
        <img
          src={facebook}
          alt='facebook'
        />
      </a>
    </div>
  );
}
