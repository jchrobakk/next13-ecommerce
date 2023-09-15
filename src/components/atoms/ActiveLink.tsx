"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	className = "text-blue-500 hover:text-blue-600 ",
	activeClassName = "font-semibold border-b border-blue-600",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

	return (
		<Link href={href} className={`${className} ${isActive && activeClassName}`}>
			{children}
		</Link>
	);
};
