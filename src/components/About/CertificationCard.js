import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CertificationBlock(props) {
  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  }

  const buttonContainerStyle = {
    marginTop: 'auto',
    textAlign: 'center',
  }

  const buttonStyle = {
    height: '40px', // Consistent button height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <Card className="project-card-view" style={{ top: '10px' }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={cardBodyStyle}>
        <Card.Title>{props.title}</Card.Title>
        <div style={buttonContainerStyle}>
          <Button
            variant="primary"
            href={props.certLink}
            target="_blank"
            style={buttonStyle}
          >
            <b>View Certification</b>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CertificationBlock
