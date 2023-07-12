import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          {title}{" "}
          <StaticImage
            src="../images/icon.png"
            alt="A Cloud"
            height={80}
            width={80}
            placeholder="blurred"
            style={{ bottom: 16 }}
          />
        </Link>
      </h1>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StaticImage
            src="../images/icon.png"
            alt="A Cloud"
            height={160}
            width={160}
            placeholder="blurred"
          />
        </div>
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
