import React, { useState } from 'react';

const List = ({ people }) => {
  const [users, setUsers] = useState(people);
  const deletePerson = (id) => {
    let updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <>
      <h3>{users.length} Birthdays today</h3>
      {users.map((user) => {
        const { id, name, age, image } = user;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <span
              role='img'
              className='btn-delete'
              onClick={() => deletePerson(id)}
              aria-label='delete'
            >
              🗑️
            </span>
          </article>
        );
      })}
    </>
  );
};

export default List;
