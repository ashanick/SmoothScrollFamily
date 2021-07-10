import React, {useState, useEffect} from 'react'
import {ContainerGrid, ContainerRow, ContainerCol, ContainerCard, ContainerStory, ContainerSideCard, 
        MainImageWrapper, MainImage, ContainerColStory, MainImageContent, SideWrapper } from './MembersElements'

        import FlippingCard from '../FlippingCard'
import MemberSidebar from '../MemberSidebar'
import MembersData from '../../Data/MembersData.json'

import icon1 from '../../Images/svg-1.svg'

const Members = (props) => {
    console.log('Members props : ', props) 

    const [person, setPerson] = useState({
        id:"",
        FirstName: "",
        MiddleName: "",
        LastName: "",
    })

    useEffect (() => {
        const tempId = props.match.params.Id
        console.log('Part 1 effect : ', props.match.params.Id )
        const tempPerson = MembersData.data.find(mm => mm.Id === tempId)
        setPerson(tempPerson)
        console.log('In Use Effect : ', person)
    }, [person, props.match.params.Id])
    return (
        <>
            <ContainerGrid> 
                <ContainerRow>
                    <ContainerCol >
                        <ContainerCard>
                            <MainImageWrapper>
                                <MainImage alt="main" src={icon1}></MainImage>
                            </MainImageWrapper>
                            <MainImageContent>
                                <ul>
                                    <li>Name: {person.FirstName} {person.LastName}</li>
                                    <li>DOD</li>
                                </ul>
                            </MainImageContent>
                        </ContainerCard>
                    </ContainerCol>
                    <ContainerCol >
                        <ContainerSideCard>
                            <MemberSidebar />
                        </ContainerSideCard>

                    </ContainerCol>
                </ContainerRow>

                <ContainerStory>
                    <ContainerColStory>
                        <FlippingCard />
                        <FlippingCard />
                        <FlippingCard />
                    </ContainerColStory>
                </ContainerStory>       
            </ContainerGrid>
        </>
    )
}

export default Members
