/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//If you change this file you need to rerun the application

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    //{
    //Access and provide de note folder
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `notes`,
    //     path: `${__dirname}/src/notes/`,
    //   },
    // },
    {
      //Access and provide de package folder to the node
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "WebWarrior",
    description: "Web dev portfolio",
    copyright: "This website is copyright the 2021 Web Warrior",
  },
}
