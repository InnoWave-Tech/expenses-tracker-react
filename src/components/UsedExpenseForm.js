import { useState } from "react";

export default function UsedExpenseForm(props) {
	const [used, setUsed] = useState(props.value);
	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(used)
		setUsed(0);
	}
	return (
		<form onSubmit={handleSubmit} className="flex-rowl flex">
			<label className="">Used:
				<input
					type="number"
					value={used}
					onChange={(e) => setUsed(e.target.value)}
				/>
			</label>
			<button type="submit" alt="S" className="bg-indigo-600 text-white"><img src={`${process.env.CI ? "/expenses-tracker-react" : ""}/images/icons8-save-32.png`} width="16px" height="16px"/></button>
		</form>
	)
}
