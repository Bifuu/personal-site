import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ResumePage extends React.Component {
  render() {
    const siteTitle = "Dustin's Tech"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="resume" />

        <h1>Dustin's Tech Knowledge</h1>
        <h3>Programming</h3>
        <ul>
          <li>C#</li>
          <li>Javascript/Typescript</li>
          <li>C/C++</li>
        </ul>

        <h3>Education</h3>
        <ul>
          <li>Associates in Electronics Engineering Technology</li>
        </ul>

        <h3>Professional Experience</h3>
        <ul>
          <li>IT/Desktop Support - 2010-current</li>
          <li>Management - 2010-current</li>
          <li>Lead Software Developer - Dec 2018-June 2019</li>
        </ul>

        <h3>Frameworks</h3>
        <ul>
          <li>React [JS]</li>
          <li>Angular 2+ [TS]</li>
          <li>Unity [C#]</li>
          <li>Winforms [C#]</li>
          <li>ASP.net [C#]</li>
        </ul>

        <h3>IT</h3>
        <ul>
          <li>Network Setup/Troubleshooting</li>
          <li>Computer Repair/Troubleshooting</li>
          <li>Windows 10</li>
          <li>Linux</li>
        </ul>

        <h3>Projects</h3>
        <ul>
          <li>Game Night</li>
          <li>Mom's Puzzles</li>
          <li>This site!</li>
        </ul>

        <h3>Hobbies</h3>
        <ul>
          <li>Raspberry Pi</li>
          <li>Arduino</li>
          <li>Video Games</li>
        </ul>
      </Layout>
    )
  }
}

export default ResumePage
