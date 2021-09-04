import React, {useState} from 'react';

const ProjectList = ({project}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'R.A.T.R',
      description: 'Recruiter pre-screening program for candidates',
      github: 'https://github.com/Mohlenkamp/Rage-Against-The-Recruiters',
      deploy: 'https://ratr20.herokuapp.com/',
      thumb: '../../assets/img/ratr.png'
    },
    {
      name: 'Employee Tracker',
      description: 'Console-based Employee Tracking project',
      github: 'https://github.com/Mohlenkamp/employee-tracker',
      deploy: 'https://github.com/Mohlenkamp/employee-tracker',
      thumb: '../../assets/img/Screenshot_EmployeeTracker.jpg'
    },
    {
      name: 'Weather Dashboard',
      description: 'OpenWeather API project to provide weather forecasts for cities',
      github: 'https://github.com/Mohlenkamp/weather-dashboard',
      deploy: 'https://mohlenkamp.github.io/weather-dashboard/index.html',
      thumb: '../../assets/img/Screenshot_Note-Taker.jpg'
    },
    {
      name: 'Note Taker',
      description: 'Simple note program deployed to Heroku',
      github: 'https://github.com/Mohlenkamp/note-taker',
      deploy: 'https://mohlenkamp-note-taker.herokuapp.com/',
      thumb: '../../assets/img/Screenshot_Note-Taker.jpg'
    },
    {
      name: 'Mars Booking',
      description: 'Sample project for a Mars travel site',
      github: 'https://github.com/Mohlenkamp/MartiansOnly',
      deploy: 'https://dorler.github.io/MartiansOnly/',
      thumb: '../../assets/img/Screenshot_MarsProject.jpg'
    },
    {
      name: 'Code Quiz',
      description: 'Sample project for a javascript coding quiz',
      github: 'https://github.com/Mohlenkamp/code-quiz',
      deploy: 'https://mohlenkamp.github.io/code-quiz/index.html',
      thumb: '../../assets/img/Code-Quiz-Screen.gif'
    }
  ]);

  const currentProjects = projects.filter((project) => project.name === name);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
        {currentProject.map((project, i) => (
          
        <div className="col-md-3">
          <div className="card h-100 text-center">
              <div className="overflow">
                  <img className="card-img-top" src={project.thumb} alt={project.name} />
              </div>
              <div className="card-body text-dark">
                  <h4 className="card-title">Note Taker</h4>
                  <p className="card-text text-secondary">
                      Simple note program deployed to Heroku"
                  </p>
                  <a target="_blank" rel="noopener noreferrer" href="https://mohlenkamp-note-taker.herokuapp.com/" className="btn btn-outline-success">Experience It</a>
              </div>
          </div>
        </div>      
      ))}
      </div>
    );
};

export default ProjectList;