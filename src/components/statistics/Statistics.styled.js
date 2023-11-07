import styled from "styled-components"


export const StatisticCont = styled('div')`
margin: 0 auto;
box-shadow: rgb(82, 82, 82) 0px 0px 20px 1px;
background-color: #F5FFFA; 
border-radius: 15px;
border: none;
width: 400px;
height: 100%;
overflow: hidden;

`
export const MainTextStatistic = styled('h1')`
text-align: center;
`
export const ListStats = styled('ul')`
display: flex;
flex-direction: row;
list-style-type: none;
justify-content: space-around;
width: 100%;
padding: 0;
margin-bottom: 0;

`
export const ItemStats = styled('li')`
padding: 10px;
width: 100%;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

& > p:first-child {
    font-weight: bold;
}

& > p:last-child {
    font-size: 20px;
}
`
export const ItemText = styled('p')`
margin: 0;
`
