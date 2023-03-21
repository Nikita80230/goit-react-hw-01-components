import { Transaction } from "../Transaction/Transaction";
import css from './TransactionHistory.module.css'

import PropTypes from 'prop-types'; 

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

TransactionHistory.propTypes = {
  transactionsData: PropTypes.array,
};
