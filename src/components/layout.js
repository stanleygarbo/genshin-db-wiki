/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family:sans-serif;
    margin:0;
    padding:0;
  }
  body {
    overflow-x:hidden;    
    background:#1c1b29;
  }
  a{
    text-decoration:none;
  }
  .gold {
    background: linear-gradient(45deg, #8f6638, #c5863d);
  }
  .purple {
    background: linear-gradient(45deg, #aa81be, #7b6395);
  }
  .blue {
    background: linear-gradient(45deg, #626987, #5b8baa);
  }
  .green {
    background: linear-gradient(45deg, #546f66, #5c9678);
  }
  .white {
    background: linear-gradient(45deg, #5b5f63, #817f7d);
  }
  .stars{
    color:gold;
    font-size:20px;
  }

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle/>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <main>{children}</main>
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
