import React from 'react'
import Frame from '../components/frame/Frame'
import SectionAction from '../components/section/SectionAction'
import SectionComedy from '../components/section/SectionComedy'
import SectionDocumentary from '../components/section/SectionDocumentary'
import SectionHorror from '../components/section/SectionHorror'
import SectionOriginal from '../components/section/SectionOriginal'
import SectionRomance from '../components/section/SectionRomance'
import SectionToprated from '../components/section/SectionToprated'
import SectionTrending from '../components/section/SectionTrending'

const Home = () => {
  return (
    <div className='Home__box'>
    <Frame/>
    <SectionOriginal/>
    <SectionTrending/>
     <SectionAction/>
    <SectionComedy/>
    <SectionDocumentary/>
    <SectionToprated/>
    <SectionHorror/>
    <SectionToprated/>
    <SectionRomance/>
    </div>
  )
}

export default Home