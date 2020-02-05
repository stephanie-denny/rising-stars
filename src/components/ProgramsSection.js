import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'
import './ProgramsSection.css'

const ProgramsSection = ({
  programs
}) => {
  return (
    <section className="section programs">
      <div className="container-fluid p-0">
        <h2 className="text-center mb-5 text-primary">Rising Stars Programs</h2>
        <Row className="pt-5">
          {!!programs &&
            programs.map((program, index) => (
              <Col className="col-12 col-md-3 m-0 p-0" key={index}>
                <Link to={`/${program.link}`}>
                  {program.image && (
                    <figure>
                      <img
                        className="img-fluid"
                        src={program.image}
                        alt={`Visit ${program.title} page`}
                      />
                      <figcaption>{program.title}{program.title === 'threes' ? ' +' : ''}</figcaption>
                    </figure>
                  )}
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  )
}

export default ProgramsSection
