import React from 'react'

import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title?: string
  description?: string
  keywords?: string[]
}

const Seo: React.FC<SeoProps> = ({ description, title, keywords }) => {
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
    >
      <meta
        http-equiv="ScreenOrientation"
        content="autoRotate:disabled"
      ></meta>
    </Helmet>
  )
}

export default Seo
