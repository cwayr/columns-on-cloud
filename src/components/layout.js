import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading" style={{ textAlign: "center" }}>
        <Link to="/">
          <StaticImage
            src="../images/logo-light.png"
            alt="Column on Cloud logo and header"
            placeholder="blurred"
            style={{ width: "85%" }}
          />
        </Link>
      </h1>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          <StaticImage
            src="../images/logo-light.png"
            alt="Columns on Cloud logo and header"
            style={{ width: "160px" }}
            placeholder="blurred"
          />
        </Link>
      </>
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
