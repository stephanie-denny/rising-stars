import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'tour',
    subject: 'Book A Tour',
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
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
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
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet>
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify-recaptcha=""
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
            <input
              className="Form--Input Form--InputText"
              type="tel"
              placeholder="Phone Number"
              name="phonenumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <span>Phone Number</span>
            <small>Format: 555-555-5555</small>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Child's Name"
              name="childsname"
              required
            />
            <span>Child's Name</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="date"
              placeholder="Child's Date of Birth or Due Date"
              name="birthday"
              required
            />
            <span>Child's Date of Birth or Due Date</span>
          </label>
          <div data-netlify-recaptcha="true"></div>
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Schedule Tour"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
