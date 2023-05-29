/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: "@import '/public/styles/variables.scss'; @import '/public/styles/mixins.scss';",
  },
};

module.exports = nextConfig;
