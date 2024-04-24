/** @type {import('next').NextConfig} */
//import i18Next from '@incmix/i18n/next-config';
//const {i18n} = i18Next;
//i18n.locales = ['en', 'ar'] // 
//i18n.defaultLocale = 'en' //

const nextConfig = {
  //i18n,
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@incmix/tailwind-config", "@incmix/ui", "@incmix/i18n"],
  images: {
    remotePatterns: [
      
    ],
  },
  experimental: {
    optimizePackageImports: [],
    typedRoutes: false,
  },
}

module.exports = nextConfig