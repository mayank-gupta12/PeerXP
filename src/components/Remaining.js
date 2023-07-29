import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.amount);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-light';

	return (
		<div className={`alert p-4 ${alertType}`}>
			<h5>OUTSTANDING DEBT: {budget - totalExpenses}</h5>
		</div>
	);
};

export default RemainingBudget;