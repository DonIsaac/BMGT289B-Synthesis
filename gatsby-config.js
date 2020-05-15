// @ts-check
const siteMetadata = {
    title: 'BMGT289B Course Synthesis',
    prefix: 'BMGT289B-Synthesis',
    author: 'Donald Isaac',
    description: 'Course Synthesis for BMGT289B - How Do Innovators Think at the University of Maryland',
  };


module.exports = {
  siteMetadata,
  pathPrefix: '/' + siteMetadata.prefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/svg\/.*\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gem.png', // This path is relative to the root of the site.
      },
    }, { // Markdown-JSX
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850,
              showCaptions: true,
              // markdownCaptions: true
            }
          }
        ]
      }
    },
    { // Source data from the filesystem
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    // {
    //   resolve: `gatsby-theme-blog`,
    //   options: {
    //     basePath: `/blog`
    //   }
    // },
  ]
}
