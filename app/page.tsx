'use client'
import { getServerSession } from "next-auth"
import Link from "next/link"
// import { authOptions } from "./api/auth/"
import { useState } from "react"
// import dynamic from "next/dynamic"
// const HeavyComponent = dynamic(
//   () => import("./components/HeavyComponent"),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>
//   }
// )
// import _ from 'lodash'



export default function Home() {


  // const session = await getServerSession(authOptions)

  const [isVisible, setIsVisible] = useState(false)


  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <h2>Welcome to Pelley CE CPA</h2>
      {/* <button onClick={() => setIsVisible(true)}>Show heavy component</button> */}
      <button onClick={async () => {
        const _ = (await import('lodash')).default

        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' }
        ]
        const sorted = _.orderBy(users, ['name'])
        console.log(sorted)
      }}>Show users</button>
      {/* {isVisible && <HeavyComponent />} */}
      <br />
      <Link href='/courses' className="btn btn-primary">Go to courses</Link>
      <br />
      <br />
      <Link href='/about' className="btn btn-primary">Go to about</Link>
    </main>
  )
}
