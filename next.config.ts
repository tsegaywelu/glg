// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",

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

//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REQUIRED for Docker + API routes (NodeMailer)
  output: "standalone",

  // REMOVE TURBOPACK – it breaks standalone
  // turbopack: { ... },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
