import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const [title1, title2] = title.split(" cloud")
  console.log(title1, title2)

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <span className="title-1">{title1}</span>
          <span className="title-2">{title2}</span>{" "}
          <StaticImage
            src="../images/icon.png"
            alt="A Cloud"
            height={70}
            width={70}
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
