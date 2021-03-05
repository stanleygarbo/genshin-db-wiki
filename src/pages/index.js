import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FirstSection from "../components/FirstSection"
import CharactersSection from "../components/CharacterSection"
import SideArrows from "../components/SideArrows"
import Articles from '../components/articles'

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <div>
        <SideArrows />
        <FirstSection />
        <CharactersSection/>
      </div>
    </Layout>
)

export default IndexPage
