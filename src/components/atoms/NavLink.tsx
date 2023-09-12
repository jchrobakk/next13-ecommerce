"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			// TODO: refactor this to not use unknown
			href={href as unknown as UrlObject}
			className={`text-blue-500 hover:text-blue-600 ${isActive && "font-semibold"}`}
		>
			{children}
		</Link>
	);
};
