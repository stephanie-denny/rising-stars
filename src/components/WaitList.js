import React from 'react'
import { Link } from 'gatsby'
import './WaitList.css'

const WaitList = ({ waitlist }) => {
  return (
    <section
      className="section wait-list text-center"
    >
      <div className="container-fluid p-0">
        <h2>{waitlist.title}</h2>
        <p>{waitlist.text}</p>
        <Link to="/join-waitlist" className="Button">Join Now</Link>
      </div>
    </section>
  )
}

export default WaitList
