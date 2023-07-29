import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState('');
	const [amount, setCost] = useState('');
	const [category, setCategory] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {id: uuidv4(),category, name, amount: parseInt(amount)};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,});
		setName('');
		setCost('');
		setCategory('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row d-flex flex-column position-relative'>
				<div className='col-sm col-lg-4 w-100'>
					<label>Name</label>
					<input required='required' type='text' className='form-control' id='name' value={name} onChange={(event) => setName(event.target.value)}/>
				</div>
				<div className='col-sm col-lg-4 w-100'>
					<label >Category</label>
					<input required='required' type='text' className='form-control' id='category' value={category} onChange={(event) => setCategory(event.target.value)}/>
				</div>
				<div className='col-sm col-lg-4 w-100'>
					<label>Cost</label>
					<input required='required' type='number' className='form-control' id='cost'	value={amount} onChange={(event) => setCost(event.target.value)}/>
				</div>
			</div>
			<div className='expense mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-success'>Create Expence</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;