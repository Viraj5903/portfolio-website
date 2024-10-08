/** @type {import('next').NextConfig} */
const nextConfig = {
    // This configuration object is used to customize the behavior of a Next.js application.

    // Old way:
    /* 
    images: {
        domains: ['openweathermap.org'],
    }, 
    */

    // New way:
    // The `images` property is used to define settings related to image optimization and handling.
    images: {
        // `remotePatterns` is an array that allows you to specify external image sources.
        remotePatterns: [
            {
                // `protocol` defines the protocol of the remote source, in this case, 'https'.
                protocol: 'https',
                // `hostname` specifies the domain from which images will be allowed.
                hostname: 'openweathermap.org',
                // `pathname` specifies the path pattern. The '/**' means any path under the specified hostname is allowed.
                // This allows images to be loaded from any URL that starts with 'https://openweathermap.org/'.
                pathname: '/**', // This allows all paths under the hostname
            },
        ],
    },
};

// Exporting the configuration to be used by Next.js.
export default nextConfig;
