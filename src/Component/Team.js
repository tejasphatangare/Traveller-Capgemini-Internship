import {
    Link
} from "react-router-dom";
import React from 'react'

function Team() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                        <h1 className="mb-5">Meet Our Guide</h1>
                        <p className="text-justify">Our Team Of Travel Experts Is Dedicated To Providing You With The Best Possible Travel Experience. From Destination Guides To Insider Tips, We're Here To Help You Make The Most Of Your Trip. Our Customer Support Team Is Available 24/7 To Answer Any Questions You May Have And Assist You With Any Issues That May Arise During Your Travels</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ 'marginTop': '-19px' }}>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Mr.Harman Singh</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ 'marginTop': '-19px' }}>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ms.Kritika Shah</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ 'marginTop': '-19px' }}>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Mr.Akash Nevre</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ 'marginTop': '-19px' }}>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ms.Sapna Kaur</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
