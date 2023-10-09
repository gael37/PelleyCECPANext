'use client'
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

const GlobalErrorPage = ({ error, reset }: Props) => {
  console.log('Error: ', error)
  return (
    <>
      <div>A global unexpected error occured.</div>
      <button className='btn btn-secondary' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default GlobalErrorPage