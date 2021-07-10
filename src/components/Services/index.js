import React from 'react'
import icon1 from '../../Images/svg-1.svg'
import icon2 from '../../Images/svg-4.svg'
import icon3 from '../../Images/svg-3.svg'


import { ServicesContainer, ServicesH1,
    ServicesWrapper, ServicesCard, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services" >
            <ServicesH1> Our services</ServicesH1>
            
            <ServicesWrapper style={{backgroundImage: '../../Images/Aditya-network.png'}}>
                <ServicesCard>
                    <ServicesIcon src ={icon1} />
                    <ServicesH2 />
                    <ServicesP>
                        Hello we offer awesome ideas
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={icon2} />
                    <ServicesH2 />
                    <ServicesP>
                        Welcome to explore
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={icon3} />
                    <ServicesH2 />
                    <ServicesP>
                        People Stories 
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
