export function Transaction({ transaction }) {
    const { id, type, amount, currency} = transaction;
    return <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
}

