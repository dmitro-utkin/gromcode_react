import React from 'react';
import moment from "moment";
import './greeting.scss';

function Greeting({ props }) {
  const { firstName, lastName, age } = props;

    const calculateAge = (age) => {
      const today = moment();
      const birth = moment(age);
      const birthDate = today.diff(birth, 'years');
      return birthDate;
    };
  
    const birthDate = calculateAge(age);
  
  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I am {birthDate} years old.
    </div>
  );
}

export default Greeting;
