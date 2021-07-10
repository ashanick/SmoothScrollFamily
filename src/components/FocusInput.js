import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef =useRef(null)

    useEffect(()=>{
        inputRef.current.focus()

    })
    return (
        <div style={{margin: '20px', padding: '20px', boxSizing: 'border-box', border: '1px solid black'}}>
            <h1> Learn Ref Hook</h1>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
