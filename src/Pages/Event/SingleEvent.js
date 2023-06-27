import React from 'react'
import SingleEvent from '../../Components/Events/SingleEvent'
import HeroSection from '../../Components/HeroSection/HeroSection'
import bgUrl from '../../Assets/Images/download (2).jpg'

const SingleEventPage = () => {
  return (
    <div>
      <HeroSection url={bgUrl} />
      <SingleEvent />
    </div>
  )
}

export default SingleEventPage