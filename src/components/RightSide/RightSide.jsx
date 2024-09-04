import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import DrugConsumption from '../DrugConsumption/DrugConsumption'
// import '../Updates/Updates'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3 className='heading3'>Notifications</h3>
            <Updates/>
        </div>
        <div>
            <h3 className='heading3'>Drug Consumptions</h3>
            <DrugConsumption/>
        </div>
    </div>
  )
}

export default RightSide
