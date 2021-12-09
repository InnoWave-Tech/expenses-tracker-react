import { useExpensesContext } from "../../context/Expenses";
import { formatter } from "../../util/currency";

export default function HomeView() {
	const context = useExpensesContext();
	const totalExpenses = Object.values(context.expenses)
		.map((exp) => exp.used)
		.reduce((a, b) => {
			return a + b;
		}, 0);
	const totalCustomExpenses = context.customExpenses
		.map((exp) => exp.used)
		.reduce((a, b) => {
			return a + b;
		}, 0);
	const totalAllowance = Object.values(context.expenses)
		.map((exp) => exp.budget)
		.reduce((a, b) => {
			return a + b;
		}, 0);
	const totalCustomAllowance = context.customExpenses
		.map((exp) => exp.budget)
		.reduce((a, b) => {
			return a + b;
		}, 0);
	return (
		<div className="flex flex-col items-center h-1/4 place-content-evenly">
			<h3 className="text-xl font-bold">Hello {context.userName}!</h3>
			<span>
				Your total used money this month is {formatter.format(totalCustomExpenses + totalExpenses)}
			</span>
			<span>Your total budget is {formatter.format(totalAllowance + totalCustomAllowance)}</span>
		</div>
	);
}
