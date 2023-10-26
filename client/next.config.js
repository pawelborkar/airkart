/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rukminim1.flixcart.com',
        port: '',
        pathname: '/fk-p-flap/1600/270/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
