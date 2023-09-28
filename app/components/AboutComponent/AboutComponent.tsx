import React from 'react'
import Link from 'next/link'
import styles from './AboutComponent.module.css'


const About = () => {
  return (
    <main>
      <div className={styles.bgBlue}>About Pelley Group</div>
      <br />
      <Link href='/'>Go to home</Link>
    </main>
  )
}

export default About