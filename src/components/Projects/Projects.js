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
              title="Free Spotify Premium"
              description="Are you a student frustrated with the high cost of Spotify Premium? Say hello to the Free Spotify Downloader!
              I was tired of shelling out $15.99 for music that's freely available on YouTube, 
              so I built this application to save you money and hassle. With Free Spotify Downloader, 
              you can effortlessly download your favorite songs and playlists from Spotify at no cost.
              Using Spotify's API, the app fetches your playlists, converts the songs into high-quality 
              MP3 files, and downloads them directly to your computer. Enjoy your favorite music and podcasts 
              offline and completely ad-free!"
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
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
