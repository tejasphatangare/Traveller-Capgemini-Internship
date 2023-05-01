import {
  Link
} from "react-router-dom";
import React from 'react'

function BackToTop() {
  return (
    <>
          <Link to="/" className="btn btn-sm btn-primary btn-sm-square back-to-top"><i className="fa fa-angle-double-up"></i></Link>
    </>
  )
}

export default BackToTop
