import { useState } from "react";

export default function CustomExpenseForm(props) {
	const [name, setName] = useState("");
	const [budget, setBudget] = useState(0);
	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit({
			name,
			budget
		});
		setName("");
		setBudget("");
	};
	return (
		<form onSubmit={handleSubmit} className="flex-col flex">
			<label className="pb-1.5">
				Name:
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<label className="pb-1.5">
				Budget:
				<input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
			</label>
			<button type="submit" className="bg-indigo-600 text-white">
				Submit
			</button>
		</form>
	);
}
