import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Welcome to Pelley CE CPA</h1>
      <br />
      <Link href='/courses' className="btn btn-primary">Go to courses</Link>
      <br />
      <br />
      <Link href='/about' className="btn btn-primary">Go to about</Link>
    </main>
  )
}
