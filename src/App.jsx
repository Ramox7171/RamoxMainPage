import Header from './components/Header';
import './style/App.scss';


import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';

function App() {
  return (
    <>
    
      <Header />
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
          <ContactForm />
        </div>
      </div>
      </div>
 
      <Footer />
      
    </>
    
  );
}

export default App;
