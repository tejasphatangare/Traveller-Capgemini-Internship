import {
    Link
} from "react-router-dom";
import React from 'react'

function Booking() {
    const Stoploading = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Booking</h6>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="mb-4">One of the main features of a traveller travel website is the ability to search for and book flights, hotels, rental cars, and activities all in one place.</p>
                                <p className="mb-4"> These websites typically aggregate data from various providers, allowing users to compare prices and choose the best option for their needs and budget.</p>
                                <Link className="btn btn-outline-light py-3 px-5 mt-2" to="/">Read More</Link>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Book A Tour</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-select bg-transparent" placeholder="Enter Place">
                                                </input>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ 'height': '100px' }}></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit" onClick={Stoploading} >Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking
