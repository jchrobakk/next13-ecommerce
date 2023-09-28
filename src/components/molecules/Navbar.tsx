import { ActiveLink } from "../atoms/ActiveLink";
import { Search } from "../atoms/Search";
import { getCartFromCookies } from "@/api/cart";

export const Navbar = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length || 0;
	return (
		<nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-8 py-4 sm:px-6 lg:max-w-7xl">
			<ul className="flex gap-4">
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink exact={false} href="/products">
						All
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/categories">Categories</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/collections">Collections</ActiveLink>
				</li>
				<li>
					<ActiveLink exact={false} href="/categories/t-shirts">
						T-shirts
					</ActiveLink>
				</li>
				<li>
					<ActiveLink exact={false} href="/categories/hoodies">
						Hoodies
					</ActiveLink>
				</li>
				<li>
					<ActiveLink exact={false} href="/categories/accessories">
						Accessories
					</ActiveLink>
				</li>
			</ul>
			<div className="flex items-center gap-4">
				<Search />
				<ActiveLink href="/cart">Cart ({quantity})</ActiveLink>
			</div>
		</nav>
	);
};
