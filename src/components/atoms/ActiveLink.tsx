"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
	exact = true,
}: {
	href: Route;
	children: ReactNode;
	exact?: boolean;
}) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

	return (
		<Link
			href={href}
			className={`text-blue-500 hover:text-blue-600 ${isActive && "font-semibold"}`}
		>
			{children}
		</Link>
	);
};
