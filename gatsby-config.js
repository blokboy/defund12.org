module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-yaml',
        'gatsby-transformer-remark',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-165430856-2',
                head: false
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'emails',
                path: `${__dirname}/_emails/`,
                ignore: ['README.md']
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'config',
                path: `${__dirname}/_config.yml`,
                
            }
        }
    ]
}