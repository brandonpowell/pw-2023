import './App.css';
import Logo from '../src/images/PW-logo.svg';
import Form from './form.js';

export default function App() {
  return (
    <div className="App">
        <nav>
            <ul className='nav-list'>
                <li className='nav-item inline'>
                    <a href='/'>
                        <img 
                            className='Logo'
                            alt="Logo" 
                            src={Logo}
                        /> 
                    </a>
                    <Form />
                </li>     
                    

                <li className='nav-item'>
                    <a href='https://clutch.co/profile/perception-works#summary'>
                        client reviews
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/#'>
                        the perceptors radio
                    </a>
                </li>
                {/* <li className='nav-item'>
                    <a href='https://theorg.com/org/perception-works'>
                        org chart
                    </a>
                </li> */}
                <li className='nav-item'>
                    <button href='https://kommunity.com/perception-works-inc'>
                        percepunity events
                    </button>
                </li>
            </ul>
        </nav>
    </div>
  );
}