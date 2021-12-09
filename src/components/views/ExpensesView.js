import React from "react";
import { useExpensesContext } from "../../context/Expenses"
import { formatter } from "../../util/currency";
import CustomExpenseForm from "../CustomExpenseForm";
import UsedExpenseForm from "../UsedExpenseForm";

export default function ExpensesView() {
	const [inEdit, setInEdit] = React.useState(false);
	const context = useExpensesContext();
	const processedValues = React.useMemo(() => {
		const myExpenses = {
			transportation: {
				used: formatter.format(context.expenses.transportation.used),
				budget: formatter.format(context.expenses.transportation.budget),
			},
			housing: {
				used: formatter.format(context.expenses.housing.used),
				budget: formatter.format(context.expenses.housing.budget),
			},
			food: {
				used: formatter.format(context.expenses.food.used),
				budget: formatter.format(context.expenses.food.budget),
			},
			amenities: {
				used: formatter.format(context.expenses.amenities.used),
				budget: formatter.format(context.expenses.amenities.budget),
			}
		};

		return {
			myExpenses,
		}
	}, [context.expenses, context.customExpenses])
	const setCustomExpenses = (newExpense) => {
		context.setCustomExpenses([...context.customExpenses, { ...newExpense, used: 0 }]);
	};
	const updateUsedCustomExpense = (expense, newUsedValue) => {
		const targetExp = context.customExpenses.find(exp => exp.name === expense);
		context.setCustomExpenses([...context.customExpenses.filter(exp => exp.name !== expense), { ...targetExp, used: newUsedValue }]);
	}
	const updateUsedExpense = (expense, newUsedValue) => {
		context.setExpenses({
			...context.expenses,
			[expense]: {
				...context.expenses[expense],
				used: newUsedValue
			}
		})
	}
	const CustomExpenses = [];
	context.customExpenses.forEach(exp => {
		CustomExpenses.push((
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2 border-2 border-indigo-600">
				<h5 className="text-lg font-semibold">
					{exp.name} ({(exp.used / exp.budget * 100).toFixed()}%)
				</h5>
				{inEdit !== exp.name ?
					<span className="flex">Used: {formatter.format(exp.used)} <img onClick={() => setInEdit(exp.name)} className="ml-1" alt="E" src="/images/icons8-pencil-64.png" height="16" width="16" /></span>
					:
					<UsedExpenseForm value={exp.used} onSubmit={(newUsed) => { setInEdit(""); updateUsedCustomExpense(exp.name, newUsed) }} />
				}
				<span>Budget: {formatter.format(exp.budget)}</span>
			</div>
		))
	})
	return (
		<div className="flex flex-row flex-wrap p-7">
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2">
				<h5 className="text-lg font-semibold">
					Transportation{' '}
					<span className={context.expenses.transportation.used > context.expenses.transportation.budget ? "text-red-600" : ""}>
						({(context.expenses.transportation.used / context.expenses.transportation.budget * 100).toFixed(2)}%)
					</span>
				</h5>
				{inEdit !== "transportation" ?
					<span className="flex">Used: {processedValues.myExpenses.transportation.used} <img onClick={() => setInEdit("transportation")} className="ml-1" alt="E" src="/images/icons8-pencil-64.png" height="16" width="16" /></span>
					:
					<UsedExpenseForm value={context.expenses.transportation.used} onSubmit={(newUsed) => { setInEdit(""); updateUsedExpense("transportation", newUsed) }} />
				}
				<span>Budget: {processedValues.myExpenses.transportation.budget}</span>
			</div>
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2">
				<h5 className="text-lg font-semibold">
					Housing{' '}
					<span className={context.expenses.housing.used > context.expenses.housing.budget ? "text-red-600" : ""}>
						({(context.expenses.housing.used / context.expenses.housing.budget * 100).toFixed()}%)
					</span>
				</h5>
				{inEdit !== "housing" ?
					<span className="flex">Used: {processedValues.myExpenses.housing.used} <img onClick={() => setInEdit("housing")} className="ml-1" alt="E" src="/images/icons8-pencil-64.png" height="16" width="16" /></span>
					:
					<UsedExpenseForm value={context.expenses.housing.used} onSubmit={(newUsed) => { setInEdit(""); updateUsedExpense("housing", newUsed) }} />
				}
				<span>Budget: {processedValues.myExpenses.housing.budget}</span>
			</div>
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2">
				<h5 className="text-lg font-semibold">
					Food{' '}
					<span className={context.expenses.food.used > context.expenses.food.budget ? "text-red-600" : ""}>
						({(context.expenses.food.used / context.expenses.food.budget * 100).toFixed()}%)
					</span>
				</h5>
				{inEdit !== "food" ?
					<span className="flex">Used: {processedValues.myExpenses.food.used} <img onClick={() => setInEdit("food")} className="ml-1" alt="E" src="/images/icons8-pencil-64.png" height="16" width="16" /></span>
					:
					<UsedExpenseForm value={context.expenses.food.used} onSubmit={(newUsed) => { setInEdit(""); updateUsedExpense("food", newUsed) }} />
				}
				<span>Budget: {processedValues.myExpenses.food.budget}</span>
			</div>
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2">
				<h5 className="text-lg font-semibold">
					Amenities{' '}
					<span className={context.expenses.amenities.used > context.expenses.amenities.budget ? "text-red-600" : ""}>
						({(context.expenses.amenities.used / context.expenses.amenities.budget * 100).toFixed()}%)
					</span>
				</h5>
				{inEdit !== "amenities" ?
					<span className="flex">Used: {processedValues.myExpenses.amenities.used} <img onClick={() => setInEdit("amenities")} className="ml-1" alt="E" src="/images/icons8-pencil-64.png" height="16" width="16" /></span>
					:
					<UsedExpenseForm value={context.expenses.amenities.used} onSubmit={(newUsed) => { setInEdit(""); updateUsedExpense("amenities", newUsed) }} />
				}
				<span>Budget: {processedValues.myExpenses.amenities.budget}</span>
			</div>
			{CustomExpenses}
			<div className="flex flex-col bg-green-300 rounded-md p-2 m-2">
				<h5 className="text-lg text-blue-500 font-semibold">
					+ Add Expense
				</h5>
				<CustomExpenseForm onSubmit={exp => setCustomExpenses(exp)} />
			</div>
		</div>
	)
}
