/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false
    swcMinify: true,
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}

module.exports = nextConfig
