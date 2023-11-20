import React from 'react'

import descriptionImage from '../../../images/HRresources.png'
import descriptionImage2 from '../../../images/logoHrsd.jpeg'

import './Description.css'

const Description = () => {

  return (
    <div className='all-descriptions'>
        <div className='decription-container'>
            <img src={descriptionImage} alt="description" className='description-image' data-aos='flip-left' data-aos-duration='1500' />
            <p className='text-description' data-aos='zoom-in-up' data-aos-duration='1000'>Human Resource Management (HRM) is a crucial function within organizations that focuses on managing and maximizing the potential of human capital to achieve organizational goals. It involves various activities and responsibilities related to the workforce, ranging from recruitment and selection to training and development, performance management, compensation, and employee relations. Here are some key aspects of HR management:</p>
        </div>

        <div className='decription-container'>
            <p className='text-description' data-aos='zoom-in-up' data-aos-duration='1000'></p>
            <img src={descriptionImage2} alt="description" className='description-image-2' data-aos='flip-right' data-aos-duration='1500' />
        </div>
    </div>
  )
}

export default Description