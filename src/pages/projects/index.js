//the way to subdirectory url page
//this is the /projects but if I create other page will be /projects/other page
import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function index() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPages {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          date
          thumb
          featuredImg
        }
      }
    }
  }
`
