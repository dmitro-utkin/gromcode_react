import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          from={transaction.from}
          to={transaction.to}
          amount={transaction.amount}
          rate={transaction.rate}
          time={transaction.time}
        />
      ))}
    </div>
  );
};

export default TransactionsList;
