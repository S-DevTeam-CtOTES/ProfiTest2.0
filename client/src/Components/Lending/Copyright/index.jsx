import React from 'react'
import './Copyright.css'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className="copyright">
        <span>&copy; PROFITEST {year}</span>
    </div>
  )
}

export default Copyright