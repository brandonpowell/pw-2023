import './App.css';
import Nav from './nav.js';
import Instagram from '../src/images/instagram.png';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
          <small>the soft launch</small>
          <h2>workfocus of the future.</h2>
          <div className="line"></div>
          <h1>creators come from our heavenly father; the future of work within the creators.</h1>
          <h2>people who are creators <span> 
          <Typewriter
              options={{
                  strings: [
                    'entreprenurs.',
                    'cheffery.',
                    'musicans.',
                    'actors.',
                    'techie.',
                    'designers.',
                    'coders.',
                    'gamers.',
                    'famers.',
                    'pastors.',
                    'leaders.',
                    'speakers.',
                    'visonaries.',
                    'teachers.',
                    'artists.',
                    'dreamers.',
                    'go getters.',
                    'risk takers.',
                    'believers.',
                    'mentors.',
                    'coaches.', 
                    'advisors.',
                    'builders.'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>   
          </h2>
              <div className="line"></div>
          <p>
            EVERY GOOD AND PERFECT GIFT IS FROM ABOVE, COMING DOWN FROM THE FATHER OF THE HEAVENLY LIGHT, WHO DOES NOT CHAGE LIKE <b>SHIFTING SHADOWS.</b> - JAMES 1:17
          </p> 
        <a
          className="App-link"
          href="https://instagram.com/perception.works"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            className='instagram-icon'
            alt="instagram" 
            src={Instagram}
          /> 
        </a>
      </header>
     </div>
  );
}

export default App;

