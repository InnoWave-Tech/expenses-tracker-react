import React from "react";

const defaultContext = {
	expenses: {
		transportation: {
			starred: false,
			used: 26,
			budget: 100
		},
		housing: {
			starred: false,
			used: 600,
			budget: 600
		},
		food: {
			starred: false,
			used: 143,
			budget: 360
		},
		amenities:
		{
			starred: false,
			used: 92,
			budget: 80
		}
	},
	customExpenses: [],
	userName:"John Doe",
};
const ExpensesContext = React.createContext(defaultContext);

export function ContextProvider(props) {
	const [expenses, setExpenses] = React.useState(defaultContext.expenses);
	const [customExpenses, setCustomExpenses] = React.useState(defaultContext.customExpenses);
	const [userName, setUserName] = React.useState(defaultContext.userName);
	return (
		<ExpensesContext.Provider value={{
			expenses,
			customExpenses,
			userName,
			setExpenses: (allExpenses)=>{
				setExpenses(allExpenses)
			},
			setCustomExpenses: (allCustomExpenses) => {
				setCustomExpenses(allCustomExpenses);
			}
		}} >
			{props.children}
		</ExpensesContext.Provider>
	)
}

export function useExpensesContext(){
	const state = React.useContext(ExpensesContext);
	return state;
}