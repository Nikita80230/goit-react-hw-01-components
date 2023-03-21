import PropTypes from 'prop-types'; 

export function Transaction({ transaction }) {
    const { type, amount, currency} = transaction;
    return <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}


Transaction.propTypes = {
  transaction: PropTypes.object,
};
