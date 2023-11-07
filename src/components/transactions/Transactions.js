import {Transactions, HeadTransactions, BodyTransactions, ItemTransactions} from './Transactions.styled'


export const Transaction = ({ transactions }) => {
    return (
    <Transactions>
            
        <HeadTransactions>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </HeadTransactions>
            
        <BodyTransactions>
        {transactions.map((transaction) => (
        <ItemTransactions key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
        </ItemTransactions>
        ))}    
        </BodyTransactions>
            </Transactions>
    )
};
