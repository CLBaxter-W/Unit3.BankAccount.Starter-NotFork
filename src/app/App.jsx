import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";
import { store } from "./store.js";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";

import "./app.css";

// DONE - TODO: Import the Redux store and provide it to this component using <Provider>.

const App = () => {

  return (
    <main>
      <Provider store={store}>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </Provider>
    </main>
  );
};

export default App;
