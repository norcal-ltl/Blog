import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Head from "../components/head"

const Blog = () => {
  // fetch data from graphql api
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }

      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      <Head title="Home" />
      <h1>Hello world!</h1>
      <p> {data.site.siteMetadata.title} </p>
      <p> {data.site.siteMetadata.author} </p>

      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={data.allMarkdownRemark.edges.id}>
              <h2> {edge.node.frontmatter.title} </h2>
              <p> {edge.node.frontmatter.date} </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Blog
