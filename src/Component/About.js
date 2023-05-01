import {
    Link
} from "react-router-dom";
import React from 'react'
import Team from "./Team";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

function About() {
    return (
        <>
            <div className="container-xxl py-5" id="tolinknav">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ 'minHeight': '400px' }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="../img/about.jpg" alt="Could Not Load" style={{ 'objectFit': 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className="text-primary">Traveller</span></h1>
                            <p className="mb-4 text-justify">Welcome to our travel website, your one-stop destination for all your travel needs! Whether you're planning a solo adventure or a family vacation, we've got you covered.</p>
                            <p className="mb-4">Our website offers a comprehensive range of travel services, including flight bookings, hotel reservations, car rentals, and vacation packages. With a user-friendly interface and easy-to-use search tools, you can find the perfect itinerary to suit your needs and budget.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Team />
            <Blog />
            <Testimonials />
        </>
    )
}

export default About
