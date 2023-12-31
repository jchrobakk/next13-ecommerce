import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { Navbar } from "@/components/molecules/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<section className="sm:py-18 mx-auto flex w-full max-w-4xl flex-grow flex-col px-8 py-12 text-gray-600 sm:px-6 lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center">
					<p>&copy; {new Date().getFullYear()} next13masters ecommerce</p>
					<ul className="mx-auto flex max-w-4xl items-center justify-center gap-4 px-8 sm:px-6 lg:max-w-7xl">
						<li>
							<ActiveLink href="/faq">FAQ</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/tos">Terms of Service</ActiveLink>
						</li>
					</ul>
				</footer>
			</body>
		</html>
	);
}
