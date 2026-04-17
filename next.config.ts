import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,  // Aplica la regla para archivos CSS
      use: ['style-loader', 'css-loader'],  // Carga el CSS
    });
    return config;
  },
};

module.exports = nextConfig;