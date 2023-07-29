import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value));
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<div className="filter">
			<label htmlFor="" className='w-100'>
				Search your Expence
			<input type='text' className='form-control w-75 mb-2 mr-sm-2' placeholder='Type to search...' onChange={handleChange}/>
				</label>	
			</div>
		<table className='border border-dark w-100'>
        <tr>
            <th className='border border-dark border-top-2 text-center'>Name</th>
            <th className='border border-dark border-top-2 text-center'>Category</th>
            <th className='border border-dark border-top-2 text-center'>Amount</th>
        </tr>
        <tr>
            <td>
			{filteredExpenses.map((expense) => (
					<ExpenseItem name={expense.name}  />
					))}
			</td>
			<td className='border border-dark px-2'>
			{filteredExpenses.map((expense) => (
					<ExpenseItem  category={expense.category}  />
					))}
			</td>
			<td className='w-50 border border-dark px-2'>
			{filteredExpenses.map((expense) => (
					<ExpenseItem  id={expense.id} amount= {expense.amount}  />

					))}
			</td>
        </tr>
    </table>
		</>
	);
};

export default ExpenseList;
			// 	{filteredExpenses.map((expense) => (
			// 		<ExpenseItem id={expense.id} name={expense.name} amount= {expense.amount}  />
			// 		))}