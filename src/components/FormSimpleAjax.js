import React, { Fragment } from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends React.Component {
  static defaultProps = {
    name: 'contact',
    subject: 'Hello from Risingstarsaustin.com', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your message, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          return res
        } else {
          console.log('error')
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="First Name"
                name="firstname"
                required
              />
              <span>First Name</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Last Name"
                name="lastname"
                required
              />
              <span>Last Name</span>
            </label>
          </div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email address</span>
          </label>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              placeholder="Message"
              name="message"
              rows="10"
              required
            />
            <span>Message</span>
          </label>
          <div data-netlify-recaptcha="true"></div>
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Submit"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
