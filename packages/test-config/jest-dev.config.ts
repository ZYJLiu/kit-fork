import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    projects: [
        path.resolve(__dirname, 'jest-lint.config.ts'),
        path.resolve(__dirname, 'jest-prettier.config.ts'),
        path.resolve(__dirname, 'jest-unit.config.browser.js'),
        path.resolve(__dirname, 'jest-unit.config.node.js'),
    ],
    watchPlugins: [
        'jest-watch-master',
        'jest-watch-select-projects',
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    workerThreads: true,
};

export default config;
