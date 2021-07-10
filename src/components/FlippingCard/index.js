import React,  {useState} from 'react'
import styled, {css} from 'styled-components'

const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transform-style: preserve-3d;

    &.flipped {
        z-index: 1;
    }
`;

const CardSide = css `
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid hotpink;
`

const CardFront = styled.div `
    ${CardSide}
    z-index: 0;
    background: green;
`;

const CardBack = styled.div `
    ${CardSide}
    transform: rotateY(-180deg) translate(100%, 0);
    background: purple;
    z-index: 1;
`;

const CardInner = styled.div `
    flex: 1;
    display: flex;
    transition: transform 500ms;
    transform-style: preserve-3d;

    &.flipped {
        transform: rotateY(180deg);
    }
`

const FlippingCard = () => {
    const [flipped, setFlipped] = useState(false)
    return (
        <CardContainer>
            <CardInner className={flipped? "flipped": ""}>
                <CardFront>
                    <h2>Title</h2>
                    <p>Check it out</p>
                    <button onClick={()=> setFlipped(true)}>Read More</button>
                </CardFront>
                <CardBack>
                <h2>Back</h2>
                    <p>Back it out</p>
                    <button onClick={()=> setFlipped(false)}>Enjoyed? All Done</button>
                </CardBack>

            </CardInner>
        </CardContainer>
    )
}

export default FlippingCard
