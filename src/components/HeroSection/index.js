import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg,
    HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import video from '../../Video/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover) 
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>The Iyengar Web</HeroH1>
                <HeroP>Sign up for a new account today</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        dark="true"  primary="true"
                        >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
