import styled from 'styled-components'

export const CategoriesContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-bottom: 25px;

    @media screen and (max-width:500px){
        flex-direction: column;
        justify-content: space-evenly;
        align-items:left;
    }
`

export const Category = styled.li`
    list-style:none;
    font-size: 1.25rem;
    border-top: ${({tag}) => (tag ? '1px #1D2228 solid' : 'none')};
    border-bottom: ${({tag}) => (tag ? '1px #1D2228 solid' : 'none')};
    font-weight: ${({tag}) => (tag ? 'bold' : 'none')};
    cursor: pointer;
    color: #1D2228;
    padding: 5px 0px;


    @media screen and (max-width:500px){
        padding: 5px 0px
    }
`

export const PostsContainer = styled.div`
    display: grid;
    margin: 0 auto;
    width:fit-content;
    min-height: 50vh;
    column-gap:25px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width:1120px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:500px){
        grid-template-columns: 1fr;
    }
`