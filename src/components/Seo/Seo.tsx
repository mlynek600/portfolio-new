import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title?: string
  description?: string
  keywords?: string[]
}

const Seo = ({ description, title, keywords }: SeoProps): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaKeywords = keywords || site.siteMetadata.keywords

  return (
    <Helmet
      title={metaTitle}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords.join(','),
        },
      ]}
    />
  )
}

export default Seo
