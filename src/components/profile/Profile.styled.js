import styled from "styled-components"

export const UserCard = styled('div')`
box-shadow: rgb(82, 82, 82) 0px 0px 20px 1px;
display: flex;
flex-direction: column;
padding: 15px;
margin: 20px auto;
display: flex;
align-items: center;
justify-content: center;
background-color: #F5FFFA; 
border-radius: 15px;
border: 1px solid #FFFACD;
width: 200px;
height: 100%;

& img { 
border-radius: 50%;
border: 1px solid #000000;
}
`

export const DescriptionCard = styled('div')`
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`

export const TextDescription = styled('p')`
margin: 0;
color: #4169E1;
`

export const MainTextDescription = styled('p')`
margin: 10px 0;
font-weight: bold;
font-size: 20px;
color: #4B0082;
`

export const ListStats = styled('ul')`
margin-top: 30px;
width: 100%;
gap: 10px;
padding: 0;
display: flex;
flex-direction: row;
list-style-type: none;
justify-content: space-around;
`

export const ItemStats = styled('li')`
font-size: 13px;
display: flex;
flex-direction: column;
padding: 0;
align-items: center;
justify-content: center;
`

