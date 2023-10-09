import React from 'react'
import Link from 'next/link'



const ThankYouPage = () => {
  return (
    <main>
      <h1>Thank you for submitting your information!</h1>
      <p>Now you can browse through the website</p>
      <br />
      <Link href='/' className='btn btn-primary'>Home</Link>
      <br />
      <br />
      <Link href='/courses' className='btn btn-primary'>Courses</Link>
    </main>

  )
}

export default ThankYouPage