import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.tsx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental section if it's empty
};

export default withNextIntl(nextConfig);
