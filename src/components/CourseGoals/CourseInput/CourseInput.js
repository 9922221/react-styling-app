import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState(null);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const nameInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) setIsNameValid(true)
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) setIsAgeValid(true)
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      props.onError({type: 'name', text: 'Введи имя'})
      return;
    }
    const ageError = validateAge(enteredAge)
    if (ageError) {
      props.onError({type: 'age', text: ageError})
      return
    }
    props.onAddUser({ id: Math.random().toString(), name: enteredName, age: enteredAge });
  };

  const validateAge = (age) => {
    if (!Number.isInteger(+age)) return 'Введи целое число'
    if (age <8 || age > 100) return 'Введи число от 8 до 100'
    return ''
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isNameValid && styles.invalid}`}>
        <label>User Name</label>
        <input type="text" onChange={nameInputChangeHandler} />
      </div>
      <div className={`${styles['form-control']} ${!isAgeValid && styles.invalid}`}>
        <label>Age (Years)</label>
        <input type="text" onChange={ageInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
