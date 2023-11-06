import styled from "styled-components"

export const Friend = styled('div')`
width: 440px;
height: 100%;
margin: 40px auto;
`
export const FriendList = styled('ul')`
padding: 0;
display: flex;
flex-direction: column;
gap: 20px
`

export const FriendItem = styled('li')`
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
`
export const FriendName = styled('h1')`
margin-left: 15px;
font-size: 25px;
font-style: italic;
`

export const StasusOnlinee = styled('p')`
width: 20px;
  height: 20px;
  background-color: #00FF00;
  border-radius: 50%;
`

export const StasusOfflinee = styled('p')`
width: 20px;
  height: 20px;
  background-color: #8B0000;
  border-radius: 50%;
`