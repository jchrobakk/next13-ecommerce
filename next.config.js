/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { typedRoutes: true },
	images: {
		domains: ["naszsklep-api.vercel.app"],
	},
};

module.exports = nextConfig;
