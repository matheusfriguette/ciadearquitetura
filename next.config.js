const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_IMAGES_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
    ],
    unoptimized: true,
  },
};
