import React, { useState } from 'react';
import ReactDom from 'react-dom'

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import ModalScreen
  from "./components/UI/ModalScreen/ModalScreen";

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Tim', age: 18, id: 'g1' },
    { name: 'Tom', age: 19,  id: 'g2' }
  ]);
  const [error, setError] = useState ({})

  const addUserHandler = ({ name: enteredName, age: enteredAge }) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: enteredName, age: enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  const deleteItemHandler = goalId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(goal => goal.id !== goalId);
      return updatedUsers;
    });
  };

  const closeModalHandler = () => {
    setError({})
  }

  const errorHandler = (error) => {
    setError(error)
  }

  // const ModalOverlay = (props) => {
  //   return  (
  //     <ModalScreen error={error} onClose={closeModalHandler}/>
  //   )
  // }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = (
      <CourseGoalList items={users} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <>
      <section id="goal-form">
        <CourseInput onAddUser={addUserHandler} onError={errorHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
      { error.type && ReactDom.createPortal(<ModalScreen error={error} onClose={closeModalHandler}/>, document.getElementById('overlay-root'))
      }
    </>
  );
};

export default App;
