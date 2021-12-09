import React from "react";
import Navbar from "./NavBar";

export default function AppLayout(props) {
	return (
		<div className="h-screen">
			<Navbar />
			{props.children}
		</div>
	);
}
