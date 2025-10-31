// next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   turbopack: {
//     rules: {
//       "*.svg": {
//         loaders: [
//           {
//             loader: "@svgr/webpack",
//             options: {
//               dimensions: false,
//             },
//           },
//         ],
//         as: "*.js",
//       },
//     },
//   },
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
            },
          },
        ],
        as: "*.js",
      },
    },
  },

  // ✅ Ignore ESLint errors during build on Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ (Optional) Ignore TypeScript build errors too, if you ever get them
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
