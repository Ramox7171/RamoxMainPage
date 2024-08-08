import Header from './components/Header';
import './style/App.scss';
import About from './components/About.jsx';

import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    
      <Header />
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
          <About />
        </div>
      </div>
      </div>
 
      <Footer />
      
    </>
    
  );
}

export default App;
