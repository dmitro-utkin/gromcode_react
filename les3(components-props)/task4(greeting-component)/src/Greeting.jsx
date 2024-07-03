import React from 'react';
import moment from "moment";
import './greeting.scss';

function Greeting({ props }) {
  const { firstName, lastName, birthDate } = props;

    const calculateAge = (birthDate) => {
      const today = moment();
      const birth = moment(birthDate);
      const age = today.diff(birth, 'years');
      return age;
    };
  
    const age = calculateAge(birthDate);
  
  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I am {age} years old.
    </div>
  );
}

export default Greeting;
