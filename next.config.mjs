/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  
    // /**
    //  * Set base path. This is the slug of your GitHub repository.
    //  *
    //  * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
    //  */
    // basePath: "/nextjs-github-pages",
    images: {
      loader: "akamai",
      path: "",
    },
    assetPrefix: "./",
  };
  
  export default nextConfig;