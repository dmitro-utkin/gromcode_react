import React from 'react';
import moment from "moment";
import './greeting.scss';

function Greeting({ props }) {
  const { firstName, lastName, birthDate } = props;

    // Обчислюємо вік на основі дати народження
    const calculateAge = (birthDate) => {
      const today = moment();
      const birth = moment(birthDate);
      const age = today.diff(birth, 'years');
      return age;
    };
  
    const age = calculateAge(birthDate);
  
  return (
    <div className="greeting">
      Мене звуть {firstName} {lastName}. Мені {age} років.
    </div>
  );
}

export default Greeting;
