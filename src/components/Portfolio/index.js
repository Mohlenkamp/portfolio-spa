import React from 'react';
import Project from '../Project';
import projectMars from '../../assets/img/Screenshot_MarsProject.jpg'
import projectRATR from '../../assets/img/ratr.png'

function Portfolio () {


    return(
        <section>
            <h1>Portfolio</h1>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row card-group">
                    <div className="col-4">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card h-100 text-center">
                            <div className="overflow">
                                <img className="card-img-top" src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Experience It</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row card-group">
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={projectMars} alt='projectMars' />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">Mars Booking</h4>
                                <p className="card-text text-secondary">
                                    Sample project for a Mars travel site
                                </p>
                                <a href="https://dorler.github.io/MartiansOnly/" className="btn btn-outline-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;