import React, { useState } from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const offset = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(offset, offset + itemsPerPage);

  const goPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {currentUsers.map((user, index) => (
          <User key={index} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
