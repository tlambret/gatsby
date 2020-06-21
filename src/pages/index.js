import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello</h1>
        <p>
          need me ?<Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
