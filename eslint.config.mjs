import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist,**/node_modules',
      '**/coverage',
      '**/build,',
      '**/prisma/generated/**',
      '**/src/generated/prisma/**',
      'apps/auth/prisma/generated/prisma/**',
      'apps/auth/src/generated/prisma/**',
      'apps/reminder/prisma/generated/prisma/**',
      'apps/reminder/src/generated/prisma/**',
      'libs/**/prisma/generated/**',
      'libs/**/src/generated/prisma/**',
      'libs/**/src/prisma/migrations/**',
      'apps/**/src/prisma/migrations/**',
      'apps/**/prisma/migrations/**',
      'tools/**/prisma/migrations/**',
      'tools/**/src/prisma/migrations/**',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
