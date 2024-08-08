import Header from './components/Header';
import './style/App.scss';

import Footer from './components/Footer.jsx';
import CardContainer from './components/CardContainer.jsx';
function App() {
  return (
    <>
    
      <Header />
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
          <CardContainer />
        </div>
      </div>
      </div>
 
      <Footer />
      
    </>
    
  );
}

export default App;
