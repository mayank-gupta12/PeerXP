import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import RemainingBudget from './components/Remaining';
import Login from './components/Login';
import AddExpenseForm from './components/AddExpenseForm';

const App = () => {
	return (
		<AppProvider>
			<div className='container'>
				<div className="top w-75 d-flex justify-content-around">
				<div className="top-left w-50">
				<h3 className='mt-3'>Login Page</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Routes>
							<Route path='/' element={<Login/>}/>
						</Routes>
					</div>
				</div>
				</div>
				<div className="top-right">
				<h3 className='mt-3'>Create New Expence</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				</div>
				</div>
				<div className="bottom d-flex w-100 align-items-center justify-content-center mt-5">
					<div className="bottom-left ">
						<h2 className='mt-3 px'>My Expence Manager</h2>
						<div className=' mt-3'><br />
							<div className='col-sm'>
								<Budget />
							</div>
							<div className='col-sm'>
								<RemainingBudget />
							</div>
							<div className=' col-sm'>
								<ExpenseTotal />
							</div>
						</div>
					</div>
					<div className="bottom-right w-75 px-md-5">
						<h3 className=''>Expenses</h3>
						<div className='row '>
							<div className='col-sm'>
								<ExpenseList />
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;