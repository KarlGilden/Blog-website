import styled from 'styled-components'

export const PostContainer =styled.div`
  margin: 0 auto;
  width: 200px;
  border-radius: 2px;
  display: inline-block;
  z-index: 0;

  &:hover{
      cursor: pointer;
  }

  &:hover .post-image{
    transform: scale(1.2);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }

  @media screen and (max-width:500px){
      width:100%;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  background-color: #1d2228;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const PostText = styled.div`
  padding: 10px;
  color: #1D2228;
`

export const PostTitle =styled.h1`
  font-size: 1.5rem;
  color: #1D2228;
`

export const PostDate =styled.small`
color: #1D2228;
`