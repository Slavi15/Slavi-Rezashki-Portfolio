/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    webpack(config) {
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;