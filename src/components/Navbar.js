import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  //sometimes if you don't capitalize the component, useStaticsQuery can throw an error
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portifolio Projects</Link>
      </div>
    </nav>
  )
}
