import React from 'react'
import Marked from 'react-markdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

import './Content.css'


const ContentSplit = ({ source, className = '' }) => {

  return (
    <div className={`Content Split ${className}`}>
      <Row>
        <Col className="col-12 col-md-6 text-left">
          <Marked source={source.text} />
          {!!source.link && (
            <a href={source.link} className="Button">
              {source.linkText}
            </a>
          )}
        </Col>
        <Col className="col-12 col-md-6 p-0 d-none d-sm-block">
          <img className="img-fluid" src={source.image} alt="" />
        </Col>
      </Row>
    </div>
  )
}

ContentSplit.propTypes = {
  source: PropTypes.object,
  className: PropTypes.string
}

export default ContentSplit
