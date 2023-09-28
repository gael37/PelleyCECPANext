import React from 'react'
import Link from 'next/link'
import styles from './CoursesCards.module.css'
import Image from 'next/image'

interface Course {
  id: number,
  title: string,
  image: string
}

const CoursesCards = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const courses: Course[] = await res.json()

  return (
    <main>
      <h1>Courses</h1>
      <br />
      <Link href='/'>Go to home</Link>
      <h2>List of all the courses</h2>
      <div className="container px-5 py-24 mx-auto w-full flex flex-wrap justify-center gap-10" >
        {courses.slice(0, 29).map(course => (

          <div className="card w-96 bg-slate-100 shadow-xl mb-10 text-black" key={course.id}>
            <figure><Image src='/placeholder.jpeg' alt={course.title} width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {course.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>


        ))}
      </div>
    </main>
  )
}

export default CoursesCards