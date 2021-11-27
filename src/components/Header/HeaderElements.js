import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width:100%;
    padding: 75px 5%;
    display:flex;
    flex-direction:column;
    align-items: center;

    @media screen and (max-width:500px){
        padding: 50px 5%;
    }
`

export const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    text-align:center;
    display:flex;
    align-items:center;

    @media screen and (max-width:430px){
        font-size: 2rem;
    }

    @media screen and (max-width:320px){
        font-size: 1.5rem;
    }
`   



export const HeaderText = styled.h1`
    font-size: 1rem;

    text-align:center;
    @media screen and (max-width:430px){
        font-size: 0.75rem;
    }
`   