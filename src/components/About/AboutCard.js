import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am{' '}
            <span className="purple">Shahar Philipp Mayorov </span>
            from <span className="purple"> Ontario, Canada</span>
            <br />
            I worked this Summer Internship as a Data engineer at Tayco.
            <br />
            I am currently a student Computer Science Student at Western
            University studying Specialization of Computer Science, and Minoring
            in Software Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I love Boxing and Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling the world
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Striving to build software that people want"{' '}
          </p>
          <footer className="blockquote-footer">Philipp Mayorov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
