import React from 'react'

const ButtonCount = ({handleClick, bstyle, children}) => {
    console.log('in Button count : ', {children}, " style : ", bstyle)
    return (
        <div style={{backgroundColor:'$bstyle'}}>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(ButtonCount)
