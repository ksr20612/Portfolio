import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    config.module?.rules?.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    if (config && config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@next/font/google': require.resolve('./nextFontGoogle'),
      };
    }
    return config;
  },
};
export default config;
