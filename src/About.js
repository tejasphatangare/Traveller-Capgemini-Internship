import {
    Link
} from "react-router-dom";
import React from 'react'

function About() {
    return (
        <>
            <div class="container-xxl py-5" id="tolinknav">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ 'minHeight': '400px' }}>
                            <div class="position-relative h-100">
                                <img class="img-fluid position-absolute w-100 h-100" src="../img/about.jpg" alt="Could Not Load" style={{ 'objectFit': 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 class="mb-4">Welcome to <span class="text-primary">Traveller</span></h1>
                            <p class="mb-4 text-justify">Welcome to our travel website, your one-stop destination for all your travel needs! Whether you're planning a solo adventure or a family vacation, we've got you covered.</p>
                            <p class="mb-4">Our website offers a comprehensive range of travel services, including flight bookings, hotel reservations, car rentals, and vacation packages. With a user-friendly interface and easy-to-use search tools, you can find the perfect itinerary to suit your needs and budget.</p>
                            <div class="row gy-2 gx-4 mb-4">
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                                </div>
                                <div class="col-sm-6">
                                    <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                                </div>
                            </div>
                            <Link class="btn btn-primary py-3 px-5 mt-2" to="/">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
