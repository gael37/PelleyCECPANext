'use client'
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error: ', error)
  return (
    <>
      <br />
      <div>An unexpected error occured.</div>
      <br />
      <button className='btn btn-secondary' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage