import { useState } from 'react'
import { Peoples } from './peoples'
import './Team.css'

const Team = () => {

//   const [people, setPeople] = useState(setPeople)

  return (
    <div className="team">

            <div className="team-content">
                <div className="team__title container">
                    <h2>НАША <br />
                    КОМАНДА</h2>
                </div>
                <div className="team__pople-box cont">
                    <div className="members__box">
                        {Peoples.map((item, i) => {
                            return(
                                <>
                                <div className="team__card">
                                    <div className="team__card-img">
                                        <img src={item.avatar} alt="member" />
                                    </div>
                                    <div className="team__card-box">
                                        <div className="team__card-name">
                                            <h1>{item.name}</h1>
                                        </div>
                                        <div className="team__card-role">
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Team