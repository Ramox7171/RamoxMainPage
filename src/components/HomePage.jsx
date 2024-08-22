import { homepageText } from '../assets/store/DATA';
import '../style/HomePage.scss';
import { NavLink } from 'react-router-dom';


export default function HomePage()
{return <>

<div className='home'>
<h3>{homepageText}</h3>
</div>
<section className='home__section--links'>
    <NavLink to= 'projects' className='home__link'>
<h2>projects</h2>
    </NavLink>
    <NavLink to= 'about'className='home__link'>
<h2>about</h2>
    </NavLink>
</section>

</>
}