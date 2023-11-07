import styled from "styled-components"


export const Transactions = styled('table')`
margin: 20px auto 50px auto;
width: 500px;
border-collapse: collapse;
`

export const HeadTransactions = styled('thead')`
background-color: #333;
color: white;
  
& th {
padding: 10px;
}
`

export const BodyTransactions = styled('tbody')`
background-color: #f2f2f2;
`

export const ItemTransactions = styled('tr')`
border: 1px solid #ccc;

& td {
padding: 10px;
text-align: center;
  }
`