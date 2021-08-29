import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';




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
    <div className="App">
      <header className="Portfolio-header">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
        <main>
        {
        (currentCategory.name === 'contact' && <ContactForm></ContactForm>)
      || (currentCategory.name === 'portfolio' && <Portfolio></Portfolio>)
      || (currentCategory.name === 'resume' && <Resume></Resume>)
      || <About></About>
      }
        </main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <footer></footer>
    </div>
  );
}

export default App;
