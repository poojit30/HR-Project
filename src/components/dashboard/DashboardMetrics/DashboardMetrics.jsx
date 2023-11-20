import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './DashboardMetrics.css'

const DashboardMetrics = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='dashboard-metrics' data-aos='fade-right' data-aos-duration='1000' >
            <h2>Key HR Metrics</h2>
            <div className='metrics-item'> 
                <h3>Total Interns</h3>
                <div className='metric-value'>199</div>
            </div>
            <div className='metrics-item'>
                <h3>Open Positions</h3>
                <div className='metric-value'>49</div>
            </div>
            <div className='metrics-item'>
                <h3>Applicants</h3>
                <div className='metric-value'>500</div>
            </div>
            <div className='metrics-item'>
                <h3>Onboarding Status</h3>
                <div className='metric-value'>23</div>
            </div>
    </div>
  )
}

export default DashboardMetrics