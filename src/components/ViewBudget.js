import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
		<h5 className='text-light'>INCOME: {props.budget}</h5>
		<button type='button' className='btn btn-info' onClick={props.handleEditClick}>^ BUDGET</button>
		</>
	);
};

export default ViewBudget;