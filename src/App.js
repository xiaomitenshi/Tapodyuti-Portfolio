import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <h2>Portfolio</h2>
      </div>
      <div className='subheader'>
        <div className='headercomp'>
          Home
        </div>
        <div className='headercomp'>
          Contact
        </div>
        <div className='headercomp'>
          About Us
        </div>
      </div>
      <div className='float'>
        <div className='banner'>
          <img className='profile' src='https://firebasestorage.googleapis.com/v0/b/logpro-f2137.appspot.com/o/tapo.jpg?alt=media&token=747303f4-2e11-427f-9780-5804f642ed0d' />
          <div className='bannerwrite'>
            <div className='Heading'>
            I am Tapodyuti
            </div>
            <div className='aboutme'>
              <ul>Nice to meet y'all. I'm a member of CodeChef.</ul><ul>I like to code🔥 and I also like Basketball🏀</ul>
            </div>
          </div>
        </div>
      </div>
      <div className='social'>
        <div className='link1'>
          <div className='insta'><a href='https://www.instagram.com/tapodyuti'>📸 instagram</a></div>
          <div className='insta'><a href='https://www.twitter.com/TapodyutiSarkar2'>✨ twitter</a></div>
        </div>
        <div className='link2'>
          <div className='insta'>📧 tapodyutisarkar@gmail.com</div>
          <div className='insta'>🎓 SRM University</div>
        </div>
      </div>
    </div>
  );
}

export default App;
