module.exports = {
  siteMetadata: {
    title: 'BMGT289N Course Synthesis',
    author: 'Donald Isaac',
    description: 'Course Synthesis for BMGT289N - How Do Innovators Think at the University of Maryland',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/svg\/.*\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    }, { // Markdown-JSX
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
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
    // {
    //   resolve: `gatsby-theme-blog`,
    //   options: {
    //     basePath: `/blog`
    //   }
    // },
    'gatsby-plugin-sass',
  ],
}
