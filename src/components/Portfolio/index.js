import React from 'react';

import projectMars from '../../assets/img/Screenshot_MarsProject.jpg'
import projectRATR from '../../assets/img/ratr.png';
import projectNoteTaker from '../../assets/img/Screenshot_Note-Taker.jpg';
import projectCodeQuiz from '../../assets/img/Code-Quiz-Screen.gif';
import projectEmployeeTracker from '../../assets/img/Screenshot_EmployeeTracker.jpg';
import projectWeatherDashboard from '../../assets/img/WeatherDashboardScreenshot.gif';
import backgroundAboutMe from '../../assets/img/Blue Water_Zoom Background.mp4';

function Portfolio () {

    return(
        <section className="section-form">
            <video className='videoTag' id="aboutme-background" autoPlay loop muted>
                <source src={backgroundAboutMe} type='video/mp4' />
            </video>
            <h1 class="h1-responsive font-weight-bold text-center my-4">Portfolio</h1>
            <div className="container-fluid justify-content-center">
                <div className="row card-group justify-content-center">
                    <div className="col-md-3">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectNoteTaker} alt='projectNoteTaker' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Note Taker</h4>
                                <p className="card-text text-secondary">
                                    Simple note program deployed to Heroku
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/note-taker</li>
                                    <li class="list-group-item">https://mohlenkamp-note-taker.herokuapp.com/</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://mohlenkamp-note-taker.herokuapp.com/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-subtitle text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/MartiansOnly</li>
                                    <li class="list-group-item">https://dorler.github.io/MartiansOnly/</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectCodeQuiz} alt='projectCodeQuiz' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Simple Code Quiz</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a javascript coding quiz
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/code-quiz</li>
                                    <li class="list-group-item">https://mohlenkamp.github.io/code-quiz/index.html</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://mohlenkamp.github.io/code-quiz/index.html" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row card-group justify-content-center">
                    <div className="col-md-3">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectRATR} alt='projectRATR' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Project RATR</h4>
                                <p className="card-text text-secondary">
                                    Recruiter pre-screening program for candidates
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/Rage-Against-The-Recruiters</li>
                                    <li class="list-group-item">https://ratr20.herokuapp.com/</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://ratr20.herokuapp.com/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectEmployeeTracker} alt='projectEmployeeTracker' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Employee Tracker</h4>
                                <p className="card-text text-secondary">
                                    Console-based Employee Tracking project
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/employee-tracker</li>
                                    <li class="list-group-item">This is a console app that you must run locally from the GitHub location</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mohlenkamp/employee-tracker" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectWeatherDashboard} alt='projectWeatherDashboard' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Weather Dashboard</h4>
                                <p className="card-text text-secondary">
                                    OpenWeather API project to provide current weather and 5-day forecasts for cities
                                </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">https://github.com/Mohlenkamp/weather-dashboard</li>
                                    <li class="list-group-item">https://mohlenkamp.github.io/weather-dashboard/index.html</li>
                                </ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://mohlenkamp.github.io/weather-dashboard/index.html" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;