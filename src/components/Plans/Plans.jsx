import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
  return (
    <div className='plans-container'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className='programs-header'>
        <span className='stroke-text'>Get ready to</span>
        <span>start your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      {/* plans cards */}
      <div className='plans'>
        {plansData.map((plan, i) => {
          return (
            <div className='plan' key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>€ {plan.price}</span>

              <div className='features'>
                {plan.features.map((features, i) => {
                  return (
                    <div className='feature'>
                      <img src={whiteTick} alt='' />
                      <span key={i}>{features}</span>
                    </div>
                  )
                })}
              </div>
              <div>
                <span>See more information --> </span>
              </div>
              <button className='btn'>Join now</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans
