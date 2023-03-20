import { Transaction } from "../Transaction/Transaction";
import css from './TransactionHistory.module.css'

export function TransactionHistory({ transactionsData }) {
    return <table className={css.transactionHistory}>
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