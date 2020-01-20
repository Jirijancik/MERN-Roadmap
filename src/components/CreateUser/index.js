import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function CreateUser() {

  const [isUserName, setUserName] = useState(null); 

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    const user = {
      userName : isUserName 
    };

    setUserName(null)
    e.target.reset()
    console.log(user);
  }

  const handleOnChange = (e) =>{
    e.preventDefault();

    setUserName(e.target.value);
  }

  return (
    <>
    <h1>CREATE USER</h1>
    <Link to='/'>GO MAIN PAGE</Link>
    <form onSubmit={handleOnSubmit}>
        <label>Username: </label>
        <input
          type="text"
          required
          value={undefined}
          onChange={handleOnChange}
        ></input>
    </form>
    </>
  );
}

export default CreateUser;
