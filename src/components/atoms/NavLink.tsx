"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`text-blue-500 hover:text-blue-600 ${isActive && "font-semibold"}`}
		>
			{children}
		</Link>
	);
};
