import {
    Link
} from "react-router-dom";
import React from 'react'

function Package() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                        <h1 className="mb-5">Awesome Packages</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-1.jpg" alt="" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Thailand</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹-51,000</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link to="/" className="btn btn-sm btn-primary px-3 border-end" style={{ 'borderRadius': '30px 0 0 30px' }}>Read More</Link>
                                        <Link to="/" className="btn btn-sm btn-primary px-3" style={{ 'borderRadius': '0 30px 30px 0' }}>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-2.jpg" alt="" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Indonesia</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>5 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹-100,000</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link to="/" className="btn btn-sm btn-primary px-3 border-end" style={{ 'borderRadius': '30px 0 0 30px' }}>Read More</Link>
                                        <Link to="/" className="btn btn-sm btn-primary px-3" style={{ 'borderRadius': '0 30px 30px 0' }}>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-3.jpg" alt="" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Malaysia</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>6 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹-100,111</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link to="/" className="btn btn-sm btn-primary px-3 border-end" style={{ 'borderRadius': '30px 0 0 30px' }}>Read More</Link>
                                        <Link to="/" className="btn btn-sm btn-primary px-3" style={{ 'borderRadius': '0 30px 30px 0' }}>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Package
