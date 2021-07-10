import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, ButtonLink } from './InfoElements'  

    // lightBg, id, imgStart,topLine, lightText, headLine, darkText, description, buttonLabel, img, alt

const InfoSection = (props) => {
    const {lightBg, id, imgStart,topLine, lightText, headLine, primary, dark, dark2, darkText, description, buttonLabel, img, alt, routePath} = {...props}
    console.log('props img :', props.img, 'route ', routePath)
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <ButtonLink to={routePath}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1:0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                >{buttonLabel}</ButtonLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
            
        </>
    )
}

export default React.memo(InfoSection)
