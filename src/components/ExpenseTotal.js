import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.amount);
	}, 0);

	return (
		<div className='alert alert-warning p-4'>
			<h5>EXPENDITURE : {total}</h5>
		</div>
	);
};

export default ExpenseTotal;