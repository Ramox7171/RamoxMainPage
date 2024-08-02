import Header from './components/Header';
import './style/App.scss';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />

      <div className='wrapper'>
        <div className='main'>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>
        <aside className='aside aside-1'>Aside 1</aside>
        <aside className='aside aside-2'>Aside 2</aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
