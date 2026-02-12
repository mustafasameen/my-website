export default async function sitemap() {
  let routes = ["", "/news", "/publications", "/experience"].map((route) => ({
    url: `https://mustafasameen.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
