import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { isMobile } from 'react-device-detect'
import { Link } from 'gatsby'
import './BookTour.css'


const BookTour = ({ tour }) => {
  return (
    <section className="section book-tour p-0">
      <div className="container-fluid p-0">
        <Row>
          <Col
            className="col-12 col-md-9 book-tour-cta"
            style={{ background: isMobile ? `var(--primaryLight)` : `url(${tour.bgimage})` }}
          >
            <div className="book-tour-text">
              <h2 className="text-primary">{tour.title}</h2>
              <h3>{tour.subtitle}</h3>
              <p>{tour.text}</p>
              <Link to="/book-a-tour" className="Button">
                Book A Tour Now
              </Link>
            </div>
          </Col>
          <Col className="col-12 col-md-3">
            <img className="img-fluid" src={tour.altimg} alt="Book a Tour" />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default BookTour
