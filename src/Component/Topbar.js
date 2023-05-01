import {
  Link
} from "react-router-dom";
import React from 'react'

function Topbar() {
  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 KarveNagar,Pune, India</small>
              <small className="me-3 text-light"><Link to="tel:+91-7038643242"><i className="fa fa-phone-alt me-2"></i>+91-7038643242</Link></small>
              <small className="text-light"><i className="fa fa-envelope-open me-2"></i><Link to="mailto:tejasphatangare2109@gmail.com">travellerwordwide@gmail.com</Link></small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="/"><i className="fab fa-twitter fw-normal"></i></Link>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="/"><i className="fab fa-instagram fw-normal"></i></Link>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="/https://wa.me/7038643242" target="_blank"><i className="fab fa-whatsapp"></i></Link>
              <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to="/"><i className="fab fa-youtube fw-normal"></i></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fas fa-suitcase-rolling fa-sm"></i> Traveller</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="About" className="nav-item nav-link">About</Link>
              <Link to="Service" className="nav-item nav-link">Services</Link>
              <Link to="Package" className="nav-item nav-link">Packages</Link>
              <Link to="Destination" className="nav-item nav-link">Destinations</Link>
              <Link to="Contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/" className="btn btn-primary rounded-pill py-2  px-4">Sign In</Link>
            <Link to="/" className="btn btn-primary rounded-pill py-2 m-2 px-4">Login</Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Topbar
