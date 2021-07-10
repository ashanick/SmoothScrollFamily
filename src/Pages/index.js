import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import {  homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'

const Home = () => {

    return (
        <>
          <HeroSection />
          {/* <InfoSection {...homeObjOne}/> */}
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
          <Services />
          <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
