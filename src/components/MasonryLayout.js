import React from 'react'

import Pins from './Pins'

const styles = {
    PinContainer: {
        margin: 0,
        padding: 0,
        width: '100vw',
        backgroundColor: 'hotpink',
        position: 'absolute',
        left:'50%',
        height: '200px',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center',
    }
}

function MasonryLayout () {
    return (
        <div style={styles.PinContainer}>
           Hello babies
           <Pins size='small'/> 
           <Pins size='medium'/> 
           <Pins size='large'/> 
           <Pins size='small'/> 
           <Pins size='medium'/> 
           <Pins size='large'/> 
           <Pins size='small'/> 
           <Pins size='large'/> 
           <Pins size='small'/> 
           <Pins size='large'/> 
           <Pins size='small'/> 
           <Pins size='medium'/> 
           <Pins size='large'/> 
           <Pins size='small'/> 
           <Pins size='medium'/> 
           <Pins size='large'/> 
        </div>
    )
}


export default MasonryLayout
