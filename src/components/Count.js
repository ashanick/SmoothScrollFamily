import React from 'react'

const Count = (props) => {
    console.log('In Count : ', props.text)
    return (
        <div>
            {props.text} :- {props.count}
        </div>
    )
}

export default React.memo(Count)
