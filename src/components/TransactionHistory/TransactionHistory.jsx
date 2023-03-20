import { Transaction } from "../Transaction/Transaction";

export function TransactionHistory({ transactionsData }) {
    return <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {transactionsData.map((transaction) => (
                <Transaction transaction={transaction}  key = {transaction.id}/>
                ))}
            </tbody>
        </table>
}