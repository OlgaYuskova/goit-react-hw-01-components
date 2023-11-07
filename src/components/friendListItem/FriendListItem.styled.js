import styled from "styled-components"

export const FriendListItem = styled('li')`
width: 400px;
height: 100%;
padding: 10px 20px;
background-color: #F5F5F5;
border-radius: 10px;
border: 1px solid #000000;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 10px;

& img {
border-radius: 50%;
border: 1px solid #000000;
}

& span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
`

export const FriendName = styled('h1')`
margin-left: 15px;
font-size: 25px;
font-style: italic;
`