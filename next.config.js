// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    exportPathMap: async function () {
      return {
        '/': { page: '/' }, // Add other routes as needed
      };
    },
  };
  
