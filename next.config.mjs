/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin"; // Use `import` instead of `require`

const nextConfig = {
  // output: 'export',
  images: {
    domains: ['145404330.fs1.hubspotusercontent-eu1.net'],
    unoptimized: true,
  },
};

// Use `withNextIntl` with the config
export default withNextIntl("./i18n.js")(nextConfig);

