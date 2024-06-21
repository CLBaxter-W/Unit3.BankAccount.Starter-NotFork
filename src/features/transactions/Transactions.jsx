import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { withdrawal, deposit, transfer } from "./transactionsSlice";

import "./transactions.scss";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  // DONE - TODO: Get the balance from the Redux store using the useSelector hook
  const balance = useSelector((state) => state.balance);
  const [amountStr, setAmountStr] = useState("0.00");

  const dispatch = useDispatch();

  // set up the sessionStorage for the current balance
  useEffect(() => {
    window.sessionStorage.setItem("balanceKey", balance.toString());
  }, [balance]);

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;

    const amount = +amountStr;

    // DONE - TODO: Dispatch the appropriate transaction action based on `action`
    if (action === "withdraw") dispatch(withdrawal({ amount }));
    else if (action === "deposit") dispatch(deposit({ amount }));
    else if (action === "transfer") dispatch(transfer({ amount }));
    else console.log("You have arrived without an appropriate dispatch action");
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdraw">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input type="text" placeholder="Recipient Name" name="recipient" />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}
