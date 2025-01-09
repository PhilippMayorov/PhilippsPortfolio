import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description[0]}
          <br />
          <br />
          {props.description[1]}
        </Card.Text>

        {!props.isBlog && props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? 'Blog' : 'GitHub'}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite /> &nbsp;
            {'Demo'}
          </Button>
        )}
        {/* <hr> </hr> */}
        <div style={{ marginTop: '20px' }}>
          {props.skills.map((skill, index) => (
            <span
              key={index}
              className={`skill-badge ${
                props.selectedSkills.includes(skill) ? 'highlight' : ''
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCards
