import Link from "next/link";
import React from "react";
import { useRouter } from "next/dist/client/router";

export default function Navbar() {
	const router = useRouter();
	const pathName = router.pathname;
	return (
		<div className="bg-gray-500 text-white flex h-10 flex-row w-full pl-5 pr-5 items-center justify-center sticky top-0">
			<Link href="/">
				<a className={pathName === "/" ? "underline" : ""}>Home</a>
			</Link>
			<div className="bg-gray-300 w-0.5 h-2/5 mr-3 ml-3" />
			<Link href="/expenses">
				<a className={pathName === "/expenses" ? "underline" : ""}>Expenses</a>
			</Link>
		</div>
	);
}
