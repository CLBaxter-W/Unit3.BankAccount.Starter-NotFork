import "./transactionHistory.scss";
import { useSelector } from "react-redux";


/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance, declinedReason } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
    <td>{declinedReason}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // DONE - TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector((state) => state.history);

  console.log(history);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
            <th scope="col">Reason</th>
          </tr>
        </thead>
        <tbody>
          {
            /* DONE - TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */
            history &&
              history.map((newTransactionRow) => {
                return <TransactionRow transaction={newTransactionRow} />;
              })
          }
        </tbody>
      </table>
    </section>
  );
}
