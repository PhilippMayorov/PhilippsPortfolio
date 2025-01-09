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
          'Boxer and International Judo Athlete',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 40,
        typeSpeed: 500,
      }}
    />
  )
}

export default Type
