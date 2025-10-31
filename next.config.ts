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

  // Remove headers() — it doesn't work with Turbopack
};

export default nextConfig;
