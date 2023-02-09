import React from 'react'
import './Copyright.css'

import {TITLE} from '../../../varaibles/variables'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <div className="copyright">
        <span>&copy; {TITLE} {year}</span>
    </div>
  )
}

export default Copyright