import styled from 'styled-components'

export const ContainerGrid = styled.div `
    background: #FEFCFA;
    margin: 80px;
`;

export const ContainerRow = styled.div `
    padding: 30px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 0.6fr 0.2fr;
    justify-content: center;
    align-items: top;
    margin: 0 auto;
    height: auto;
    z-index: 1;

    // @media screen and (max-width: 1000px) {
    //     grid-template-columns: 1fr 1fr;  
    // }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;  
        padding: 0 20px;
    }
`;

export const ContainerCol = styled.div `
    width: auto;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid red; 
    margin: 0 10px; \
    padding: 10px 20px;
`;

export const ContainerCard = styled.div `
    background: #fff;
    display: grid;
    grid-template-columns: 0.3fr 0.5fr;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }
`

export const ContainerStory = styled.div `
    padding: 30px 0;
    width: 100%;
    justify-content: center;
    align-items: top;
    margin: 0 auto;
    height: auto
    z-index: 1;
`;

export const ContainerColStory = styled.div `
    padding: 0px 30px;
    width: 100%;
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 0.3fr;
    justify-content: space-evenly;
    align-items: top;
    margin: 0px;
    height: auto;
    z-index: 1;

    // @media screen and (max-width: 1000px) {
    //     grid-template-columns: 1fr 1fr;  
    // }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;  
        padding: 0 20px;
    }
`;

export const ContainerSideCard = styled.div `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    height: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }
`;

export const MainImageWrapper = styled.div `
    background: #776a2a;
    align-items: center;
    justify-content: center;
    margin: 10px 10px;
    padding: 10px 10px;
`

export const MainImage = styled.img `
    max-height: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    align-items: center;
    padding: 10px;
    align-self: center;
    overflow: hidden;
`;

export const MainImageContent = styled.div `

`;