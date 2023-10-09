'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


const WelcomeFormPage = () => {

  const router = useRouter()






  return (
    <main>
      <h1>Welcome new user!</h1>
      <br />
      <h2>Please fill the form below</h2>

      <button
        onClick={() => router.push('/thank-you')}
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>

    </main>
  )
}

export default WelcomeFormPage