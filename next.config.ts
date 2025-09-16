import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/products-and-services",
        destination: "/offerings/services/full-stack-development",
        permanent: true,
      },
      {
        source: "/blog/nextjs-website-development",
        destination: "/blog/nextjs-website",
        permanent: true,
      },
      {
        source: "/blog/react-native-app-development",
        destination: "/blog/react-native",
        permanent: true,
      },
      {
        source: "/blog/mern-stack-development-services",
        destination: "/blog/mern-stack",
        permanent: true,
      },
      {
        source: "/animated-icons",
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "trk",
          },
        ],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
