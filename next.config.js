/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }     
 };
