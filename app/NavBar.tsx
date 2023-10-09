'use client'

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {

  const { status, data: session } = useSession()

  return (
    <div className='flex justify-between text-black'>
      <Link href='/'>PELLEYCECPA</Link>
      <div className='flex gap-20 justify-between'>
        <Link href='/'>Home</Link>
        <Link href='/courses'>Courses</Link>
        <Link href='/webinars'>Webinars</Link>
        <Link href='/about'>About</Link>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'authenticated' &&
          <div className='flex gap-20'>
            <p>👤 {session.user!.name}</p>
            <Link href='/api/auth/signout'>Sign Out</Link>
          </div>
        }
        {status === 'unauthenticated' && <Link href='/api/auth/signin'>Sign in</Link>}
      </div>
    </div>
  )
}

export default NavBar