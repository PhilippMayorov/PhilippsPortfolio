import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import CampHaven from '../../Assets/Projects/CampHaven.png'
import SpotifyProject from '../../Assets/Projects/Spotify.png'
import Webscraper from '../../Assets/Projects/Webscraper.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpotifyProject}
              isBlog={false}
              title="Spotify free-ads"
              description="Tired of interruptions while listening to your favorite study playlists? 
              Meet the Spotify's ads-free Playlist designed to enhance the listening experience for students.
              This app utilizes Spotify's API to help you organize and manage your music. It fetches your playlists and 
              downloads an MP3 version from youtube onto your computer. Now you can enjoying your music without distractions
              during study sessions or on the go!"
              ghLink="https://github.com/PhilippMayorov/FreeSpotifyDownloader"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Webscraper}
              isBlog={false}
              title="Real-estate Webscraper: "
              description="Looking for housing as a student but overwhelmed by endless listings? Meet Real-Estate 
              Webscraper—the ultimate AI-powered tool to help you find the best deals effortlessly. Simply copy and paste 
              the URL of your real estate browsing page, then describe your ideal home to the AI. 
              For example: 'A house with at least 4 bedrooms, 1500 sq. ft., a monthly rent of $2000–$2500, and the owner’s contact info.'
              The Real-Estate Webscraper will instantly filter and extract 
              all relevant listings that match your criteria. Within seconds, you'll have a clear, 
              organized table of the best-priced options; no more wasted time or missed opportunities. 
              Find your student housing faster and smarter!"
              ghLink="https://github.com/PhilippMayorov/RealEstateScraper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CampHaven}
              isBlog={false}
              title="Camphave (Kijiji-Clone)"
              description="A campsite web application marketplace that connects people 
              who want to rent out their campsite with people wanting to accommodate a campsite (similar to Air BnB). 
              Users can view available places for rent or create an account and post their listing for Rent. I used HTML, CSS, and EJS 
              for the front end visual. Applied middleware to ensure valid user authorization using Express.js, JOI Package and Bootstrap.
              Camphaven is also cyber safe through Cyber-security prevention such as MongoDB injection, 
              and cross-site scripting (XSS) using Astronaut package"
              ghLink="https://github.com/PhilippMayorov/Camp-Haven"
              demoLink="https://camphaven.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
