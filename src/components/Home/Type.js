// Function that types and deletes in sentences
import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Full-Stack Software Engineer',
          'Computer Science Student at Western University',
          'Boxer and International Judo Athlete', // not sure if to include this.
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
