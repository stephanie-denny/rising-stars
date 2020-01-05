import React, { Fragment } from 'react'
// import { navigateTo } from 'gatsby-link'

import './Form.css'

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }



  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {

    e.preventDefault();

  try{
    const response = await fetch("/.functions/sendemail", {
      method: "POST",
      body: JSON.stringify(this.state),
    })

    if (!response.ok) {
      //not 200 response
      return
    }

    //all OK

  } catch(e){
    //error
  }
    // e.preventDefault()
    // const form = e.target
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({
    //     'form-name': form.getAttribute('name'),
    //     ...this.state
    //   })
    // })
    //   .then(() => navigateTo(form.getAttribute('action')))
    //   .catch(error => alert(error))
  }

  render() {
    return (
      <Fragment>
        <form
          className="Form"
          name="contact"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="First Name"
                name="name"
                onChange={this.handleChange}
                required
              />
              <span>Your name:</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <span>Your email:</span>
            </label>
          </div>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              name="message"
              placeholder="Message"
              rows="10"
              required
              onChange={this.handleChange}
            />
            <span>Message:</span>
          </label>
          <div data-netlify-recaptcha="true"></div>
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Send"
          />
        </form>
      </Fragment>
    )
  }
}
