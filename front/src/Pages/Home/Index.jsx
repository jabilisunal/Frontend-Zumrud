import React from 'react'
import WeHelpSection from '../../Components/WeHelpSection'
import OurServicesSection from '../../Components/OurServicesSection'
import MoreAboutUsSection from '../../Components/MoreAboutUsSection'
import OurMembersSection from '../../Components/OurMembersSection'

function HomePage() {
  return (
    <div>
      <WeHelpSection/>
      <OurServicesSection/>
      <MoreAboutUsSection/>
      <OurMembersSection/>
    </div>
  )
}

export default HomePage