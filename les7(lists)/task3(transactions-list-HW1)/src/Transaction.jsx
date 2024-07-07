import React from "react";
import moment from "moment";

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedTime = moment(time).format("MMMM Do YYYY, h:mm:ss a");
  const formattedAmount = new Intl.NumberFormat("en-GB").format(amount);

  return (
    <ul className="transactions">
      <li className="transaction">
        <span className="transaction__date">
          {moment(time).format("DD MMM")}
        </span>
        <span className="transaction__time">
          {moment(time).format("HH:mm")}
        </span>
        <span className="transaction__assets">{`${from} → ${to}`}</span>
        <span className="transaction__rate">{rate}</span>
        <span className="transaction__amount">{formattedAmount}</span>
      </li>
    </ul>
  );
};

export default Transaction;
