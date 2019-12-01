import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FA from 'react-fontawesome'
import './TestimonialSlider.css'

export default class Testimonials extends React.Component {
  static defaultProps = {
    testimonials: []
  }

  render() {

  const { testimonials } = this.props
    return (
      <section className="section testimonials">
        <h2 className="text-center text-primary">Hear From Happy Parents!</h2>
        <Carousel fade={true} controls={false}>
          {!!testimonials &&
            testimonials.map((item, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption>
                  <blockquote>
                    <FA
                      name="quote-left"
                      style={{ color: `var(--primary)` }}
                    />{' '}
                    {item.text}{' '}
                    <FA
                      name="quote-right"
                      style={{ color: `var(--primary)` }}
                    />
                  </blockquote>

                  <cite>{item.name}</cite>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </section>
    )
  }
}