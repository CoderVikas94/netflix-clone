import React from 'react'
import Footer from '../components/footer/Footer'
import Frame from '../components/frame/Frame'
import SectionAction from '../components/section/SectionAction'
import SectionComedy from '../components/section/SectionComedy'
import SectionDocumentary from '../components/section/SectionDocumentary'
import SectionHorror from '../components/section/SectionHorror'
import SectionOriginal from '../components/section/SectionOriginal'
import SectionRomance from '../components/section/SectionRomance'
import SectionToprated from '../components/section/SectionToprated'
import SectionTrending from '../components/section/SectionTrending'

const Home = ({showModal}:any) => {
  return (
    <div className='Home__box'>
    <Frame/>
    <SectionOriginal showModal={showModal}/>
    <SectionTrending showModal={showModal}/>
    <SectionToprated showModal={showModal}/>
     <SectionAction showModal={showModal}/>
    <SectionComedy showModal={showModal}/>
    <SectionHorror showModal={showModal}/>
    <SectionRomance showModal={showModal}/>
    <SectionDocumentary showModal={showModal}/>
  </div>
  )
}

export default Home