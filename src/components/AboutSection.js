import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FA from 'react-fontawesome'
import { Link } from 'gatsby'

import './AboutSection.css'

const AboutSection = ({
  about
}) => {
  return (
    <section className="section about">
      <div className="container text-center">
        <h2 className="text-primary">{about.title}</h2>
        <h3 className="text-secondary">{about.subtitle}</h3>
        <p className='mb-5'><em>{about.text}</em></p>
        <Row>
          {about.col.map((column, index) => (
            <Col className="text-center" key={index}>
              <FA
                name={column.icon}
                size="2x"
                style={{ color: 'var(--secondary)' }}
                className="mb-4"
              />
              <h5>{column.title}</h5>
              <p>{column.text}</p>
            </Col>
          ))}
        </Row>
        <Link to="/about" className="Button">More About Rising Stars</Link>
      </div>
    </section>
  )
}

export default AboutSection
