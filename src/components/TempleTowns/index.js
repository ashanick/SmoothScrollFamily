import React, {useState, useEffect} from 'react'
import API from '../../API'
import Masonry from 'react-masonry-css'

import './style.css'
import CityFile from '../../Data/CityFile.json'

import {Container, FormWrap, Icon, FormContent,
    Form, FormH1, FormLabel, 
    FormInput, FormButton, Text} from './TempleTownElements'

let pageNum = 1

const TempleTowns = () => {
    const [villages, setVillages] = useState([])

    useEffect(()=> {
        const tempVillage = CityFile.data.filter(tt=>tt.CityCat==="Village")
        setVillages(tempVillage)
        console.log(' Village Data : ', villages)
    }, [])
    
    return (
        <>
        <Container >
            <h1>Bon jour</h1>
            
        </Container>
        </>
    )
}

export default TempleTowns
