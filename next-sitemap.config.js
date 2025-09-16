/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.bharathatechno.com", //
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"], // (optional) paths to exclude
};
