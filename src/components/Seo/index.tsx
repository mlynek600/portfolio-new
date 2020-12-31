import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  title?: string
  description?: string
  keywords?: string[]
}

const Seo = ({ description, title, keywords }: Props): JSX.Element => {
  //add siteUrl to siteMetadata

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
