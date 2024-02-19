/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pxbar.com',
          },
          {
            protocol: 'https',
            hostname: 'wallpapers.com',
          },
        ],
      },
};

export default nextConfig;
