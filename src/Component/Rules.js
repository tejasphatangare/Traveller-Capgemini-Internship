import {
  Link
} from "react-router-dom";
import React from 'react'

function Rules() {
  return (
    <>
      <div className="text-center p-3" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.2)' }}>
        Read The Latest Domestic & International Travel Guidelines Here Before You Travel. Stay Safe, Travel Safe.
        <Link className="text-dark" to="/">Read More</Link>
      </div>
    </>
  )
}

export default Rules
