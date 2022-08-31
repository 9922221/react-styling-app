import React from 'react';

import styles from './InputErrorForm.module.css';
import Button from "../../UI/Button/Button";

const InputErrorForm = props => {
	const formSubmitHandler = (event) => {
		event.preventDefault()
		props.onSubmit()
	}
	return (
		<form className={styles['error-form']} onSubmit={formSubmitHandler}>
			<label>Invalid Input</label>
			<div className={`${styles['form-control']}`}>
				<p>{props.text}</p>
				<Button type="submit">Got it</Button>
			</div>
		</form>
	);
};

export default InputErrorForm;
