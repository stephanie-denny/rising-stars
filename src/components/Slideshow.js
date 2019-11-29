import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class Slideshow extends React.Component {
  static defaultProps = {
    fadeImages: []
  }

  render() {


const { fadeImages } = this.props
  return (
    <Carousel>
      {!!fadeImages &&
          fadeImages.map((slide, index) => (
  <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={slide.image}
      alt={slide.title}
    />
    <Carousel.Caption>
      <h3>{slide.title}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  ))}
  </Carousel>
  )
}
}
