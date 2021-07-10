import React from 'react'
import styled from 'styled-components'

const styles = {
    pin: {
        margin: 0,
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red',
        margin: '15px'
    },    
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

const Pins = (props) => {
    const pinSize = props.size
    console.log('Pin Style : ', pinSize)
    return (
        <div style = {{
            ...styles.pin,
            ...styles[pinSize]
        }}>
            Darling am a Pin
        </div>
    )
}

export default Pins
