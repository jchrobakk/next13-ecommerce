/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { typedRoutes: true },
	images: {
		domains: ["media.graphassets.com"],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
