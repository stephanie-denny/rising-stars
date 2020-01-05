const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email, subject } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`
    })
    .join('<br><br>')

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: subject ? subject : 'Contact Form Submission',
    html: body
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: 'Message sent'
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    }
  }
}

// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//   to: 'risingstars@mailinator.com',

//   from: 'test@example.com',

//   subject: 'Test Email',

//   text: 'and easy to do anywhere, even with Node.js',

//   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// }

// sgMail.send(msg)
