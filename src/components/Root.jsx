import { Outlet,useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import '../style/Root.scss';

function RootLayout() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/foto' && <Header />}
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
         <Outlet/>
        </div>
      </div>
      </div>
      {location.pathname !== '/foto' && <Footer />}
    </>
  );
}

export default RootLayout;