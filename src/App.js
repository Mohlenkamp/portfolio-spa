import logo from './logo.svg';

import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GHIcon from './assets/img/GitHubCard.gif';
import LIIcon from './assets/img/LinkedInCard.gif';
import TwIcon from './assets/img/145812.png';




function App() {

  const [categories] = useState([
    {
      name: 'about me',
      description: 'Brief description of who I am',
    },
    {
      name: 'portfolio',
      description: 'Examples of some select projects and programs that I developed',
    },
    {
      name: 'contact',
      description: 'In case you want to get ahold of me',
    },
    { name: 'resume', description: 'My resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div id="container" className="App">
      <header className="Portfolio-header">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
        <main id="content">
        {
        (currentCategory.name === 'contact' && <ContactForm></ContactForm>)
      || (currentCategory.name === 'portfolio' && <Portfolio></Portfolio>)
      || (currentCategory.name === 'resume' && <Resume></Resume>)
      || <About></About>
      }
        </main>
        <div class="clearfooter"></div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <footer>
      <div id="footer">
        <a className="App-link"href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><img src={logo} className="App-logo" alt="logo" /></a>
        <a href="https://github.com/Mohlenkamp" target="_blank" rel="noopener noreferrer"><img src={GHIcon}  alt="GHLogo" /></a>
        <a href="https://linkedin.com/in/john-mohlenkamp-3418b98" target="_blank" rel="noopener noreferrer"><img src={LIIcon}  alt="GHLogo" /></a>
        <a href="https://twitter.com/mohlenkampj" target="_blank" rel="noopener noreferrer"><img src={TwIcon}  alt="GHLogo" /></a>
      </div>
      </footer>
    </div>
  );
}

export default App;
