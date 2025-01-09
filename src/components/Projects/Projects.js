import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import CampHaven from '../../Assets/Projects/CampHaven.png'
import SpotifyProject from '../../Assets/Projects/Spotify.png'
import Webscraper from '../../Assets/Projects/Webscraper.png'
import Backlinker from '../../Assets/Projects/Backlinker.png'

// Separate skill lists
const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'C/C++',
  'Java',
  'C#',
  'SQL',
]
const frameworksLibraries = [
  'React',
  'HTML/CSS',
  'Express.js',
  'Node.js',
  'Selenium',
  'MongoDB',
  'Llama',
  'MySQL',
  'Tailwind',
  'BootStrap',
  'AWS S3',
]
const developerTools = [
  'Postman',
  'Jira',
  'Git Version Control',
  'Postman',
  'Excel',
]

const projectsData = [
  {
    imgPath: Backlinker,
    title: 'AI-Backlinker (Saas)',
    description: [
      'Software as a Serivce AI Backlinker that helps generate High Domain backlinks to your wesbites, hence increasing the SEO of your wesbite.',
      'NOTE: CURRENTLY IN PRODUCTION. NO public github repository as this software will be used for buiness purposes. However I can demostate what I have build in an interview setting',
    ],
    // ghLink: 'https://github.com/PhilippMayorov/Camp-Haven',
    // demoLink: 'https://camphaven.onrender.com/',
    skills: [
      'TypeScript',
      'React',
      'Node.js',
      'HTML/CSS',
      'Express.js',
      'Git Version Control',
      'MySQL',
      'Tailwind',
      'MailGrid API',
      'Stripe API',
      'AWS S3',
      'BootStrap',
    ],
  },
  {
    imgPath: SpotifyProject,
    title: 'Spotify free-ads',
    description: [
      "Tired of interruptions while listening to your favorite study playlists? Meet the Spotify's ads-free Playlist designed to enhance the listening experience for students.",
      'NOTE: Project is not hosted. I can run the project locally in an intreview setting if interested',
    ],
    ghLink: 'https://github.com/PhilippMayorov/FreeSpotifyDownloader',
    skills: ['Python', 'Spotify API', 'Selenium', 'Streamlit'],
  },
  {
    imgPath: Webscraper,
    title: 'Real-estate Webscraper',
    description: [
      'Looking for housing as a student but overwhelmed by endless listings? Meet Real-Estate Webscraper—the ultimate AI-powered tool to help you find the best deals effortlessly.',
      'NOTE: Project is not hosted. I can run the project locally in an intreview setting if interested',
    ],
    ghLink: 'https://github.com/PhilippMayorov/RealEstateScraper',
    skills: ['Python', 'Llama', 'Selenium', 'Beautifulsoup', 'ChromeDriver'],
  },
  {
    imgPath: CampHaven,
    title: 'Camphave (Kijiji-Clone)',
    description: [
      'A campsite web application marketplace that connects people who want to rent out their campsite with people wanting to accommodate a campsite.',
      'NOTE: I am using a free hosting provider, so demo link may be SLOW. I can run the project locally in an interview setting',
    ],
    ghLink: 'https://github.com/PhilippMayorov/Camp-Haven',
    demoLink: 'https://camphaven.onrender.com/',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'HTML/CSS',
      'Express.js',
      'Cross-Site Scripting (XSS)',
      'Git Version Control',
      'Postman',
      'MongoDB',
      'MatBox API',
      'BootStrap',
    ],
  },
]

function Projects() {
  const [selectedSkills, setSelectedSkills] = useState([])

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const filteredProjects = selectedSkills.length
    ? projectsData.filter((project) =>
        project.skills.some((skill) => selectedSkills.includes(skill))
      )
    : projectsData

  return (
    <Container fluid className="project-section" style={{ paddingTop: '10px' }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: 'left' }}>
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: 'white', textAlign: 'left' }}>
          Here are a few projects I've worked on. Please select the relevant
          skill you are looking for below:
        </p>

        {/* Render Languages */}
        <h3 style={{ color: 'white', textAlign: 'left' }}>Languages</h3>
        <div className="skills-filter" style={{ textAlign: 'left' }}>
          {languages.map((skill) => (
            <Button
              key={skill}
              variant={selectedSkills.includes(skill) ? 'primary' : 'secondary'}
              onClick={() => toggleSkill(skill)}
              style={{ margin: '5px' }}
            >
              {skill}
            </Button>
          ))}
        </div>

        {/* Render Frameworks/Libraries */}
        <h3 style={{ color: 'white', textAlign: 'left' }}>
          Frameworks/Libraries
        </h3>
        <div className="skills-filter" style={{ textAlign: 'left' }}>
          {frameworksLibraries.map((skill) => (
            <Button
              key={skill}
              variant={selectedSkills.includes(skill) ? 'primary' : 'secondary'}
              onClick={() => toggleSkill(skill)}
              style={{ margin: '5px' }}
            >
              {skill}
            </Button>
          ))}
        </div>

        {/* Render Developer Tools */}
        <h3 style={{ color: 'white', textAlign: 'left' }}>Developer Tools</h3>
        <div className="skills-filter" style={{ textAlign: 'left' }}>
          {developerTools.map((skill) => (
            <Button
              key={skill}
              variant={selectedSkills.includes(skill) ? 'primary' : 'secondary'}
              onClick={() => toggleSkill(skill)}
              style={{ margin: '5px' }}
            >
              {skill}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                skills={project.skills} // Pass skills to ProjectCard
                selectedSkills={selectedSkills} // Pass selected skills to highlight
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
