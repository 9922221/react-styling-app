import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(user => (
        <CourseGoalItem
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteItem}
        >
          {user.name}   {user.age} лет
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
