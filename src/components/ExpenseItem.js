import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,});
	};

	return (
		<li className='list-group-item d-flex border-top border-dark my-1'>
			{props.name}
			{props.category}
            <strong>{props.amount} 
			</strong>
			<TiDelete color='red' size='1.5em' onClick={handleDeleteExpense} />	
		</li>
	);
};

export default ExpenseItem;