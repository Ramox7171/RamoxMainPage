import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import '../style/Root.scss';

function RootLayout() {
  return (
    <>
      <Header />
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
         <Outlet/>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;