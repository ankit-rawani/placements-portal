/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/',
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
