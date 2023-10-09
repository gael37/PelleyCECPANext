import React, { Suspense } from 'react'
import Link from 'next/link'
import CoursesGallery from './CoursesGallery'


interface Props {
  searchParams: { rearrange: string }
}



const CoursesPage = ({ searchParams: { rearrange } }: Props) => {
  return (
    <main>
      <h1>Courses</h1>
      <br />
      <Link href='/'>Go to home</Link>
      <h2>List of all the courses - Current filter: {rearrange}</h2>
      <br />
      <div className='flex gap-10'>
        <Link href='/courses?rearrange=title' className='btn btn-secondary'>Sort alphabetically by title</Link>
        <Link href='/courses?rearrange=id' className='btn btn-secondary'>Sort numerically by id</Link>
        <Link href='/courses?rearrange=ideven' className='btn btn-secondary'>Filter by even id</Link>
        <Link href='/courses?rearrange=clear' className='btn btn-secondary'>Clear filters</Link>
      </div>
      <Suspense fallback={<p className='text-center mt-20 text-black'>Loading...</p>}>
        <CoursesGallery rearrange={rearrange} />
      </Suspense>
    </main>

  )
}

export default CoursesPage