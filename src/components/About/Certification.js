import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import ProjectCard from '../Projects/ProjectCards'
import CertificationCard from './CertificationCard'
import Particle from '../Particle'
import ReactNative from '../../Assets/Projects/Reactnative.png'
import WebDev from '../../Assets/Projects/WebDeveloper.png'
import Javascript from '../../Assets/Projects/Javascript.png'

function CertificationBlock() {
  return (
    <Container fluid className="Certification-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={WebDev}
              title="Web Development Bootcamp (74hr)"
              certLink="https://www.udemy.com/certificate/UC-aa219d17-139e-43aa-8397-24905bef5976/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ReactNative}
              title="React-Native Certified (38hr)"
              certLink="https://www.coursera.org/account/accomplishments/verify/5WGGZLSBO9IE"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={Javascript}
              title="Javascript Data Structures and Algorithms (300hr)"
              certLink="https://www.freecodecamp.org/certification/PhilippMayorov/javascript-algorithms-and-data-structures"
              // demoLink="insert Link once I have deme Link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CertificationBlock
