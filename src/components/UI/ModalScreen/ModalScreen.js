import React from 'react';

import styles from './ModalScreen.module.css';
import InputErrorForm
	from "../../CourseGoals/InputErrorForm/InputErrorForm";

const ModalScreen = props => {
	return (
		<div className={styles.modal}>
			<InputErrorForm text={props.error.text} onSubmit={props.onClose}/>
		</div>
	);
};

export default ModalScreen;
