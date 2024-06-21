import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transactions/transactionsSlice";

// DONE - TODO: Configure the store to use the reducer from the transactions slice.
export const store = configureStore({ reducer: transactions });
