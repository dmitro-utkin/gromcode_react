import React, { useState } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

const UsersList = ({ users }) => {
  const [filterText, setFilterText] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <Filter
        filterText={filterText}
        count={filteredUsers.length}
        onChange={handleFilterChange}
      />
      <ul className="users">
        {filteredUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;