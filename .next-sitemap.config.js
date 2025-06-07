/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL || "http://localhost:3000", // <-- set your website url
  generateRobotsTxt: true, // (optional)
  // ...other options
};
