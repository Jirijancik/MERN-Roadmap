import React from 'react';
import {Link} from 'react-router-dom';
import TaskBlock from '../components/TaskBlock';

function MainPage() {
  const bool = false;
  return (
    <>
    <h1>MAIN PAGE</h1>
    <Link to='/create'>CREATE USER</Link>
    <TaskBlock></TaskBlock>
    

    </>
  );
}

export default MainPage;
