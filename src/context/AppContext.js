import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter((expense) => expense.id !== action.payload),};
		case 'SET_BUDGET':
			return {...state, budget: action.payload,};
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'CBC Test', amount: 500, category:"Health" },
		{ id: uuidv4(), name: 'Boat Earphones', amount: 500, category:"Electronic" },
	],
};
export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return (
		<AppContext.Provider
		value={{expenses: state.expenses,budget: state.budget, dispatch,}}>
			{props.children}
		</AppContext.Provider>
	);
};
export const AppContext = createContext();