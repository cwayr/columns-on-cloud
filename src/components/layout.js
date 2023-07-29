import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1
        className="main-heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Link to="/">
          <StaticImage
            src="../images/logo-light.png"
            alt="Column on Cloud logo and header"
            placeholder="blurred"
            style={{ width: "85%" }}
          />
        </Link>
        <Link to="https://twitter.com/ColumnsOnCloud">
          <StaticImage
            src="../images/twitter.png"
            alt="Twitter logo"
            placeholder="blurred"
            style={{ width: "24px" }}
          />
        </Link>
      </h1>
    )
  } else {
    header = (
      <h1
        className="article-heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Link className="header-link-home" to="/">
          <StaticImage
            src="../images/logo-light.png"
            alt="Columns on Cloud logo and header"
            style={{ width: "160px" }}
            placeholder="blurred"
          />
        </Link>
        <Link to="https://twitter.com/ColumnsOnCloud">
          <StaticImage
            src="../images/twitter.png"
            alt="Twitter logo"
            placeholder="blurred"
            style={{ width: "24px" }}
          />
        </Link>
      </h1>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {/* <footer>© {new Date().getFullYear()}</footer> */}
    </div>
  )
}

export default Layout
