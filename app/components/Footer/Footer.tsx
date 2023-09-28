import React from 'react'
import Link from 'next/link'
import Styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={Styles.sectionFooter}>
      <div className='text-center py-4'>
        <Link href="https://1manstartup.com/privacy-policy" target="_blank" className='btn btn-link'>
          Privacy
        </Link>
        <span>|</span>
        <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn btn-link'>
          Terms
        </Link>
        <p>Copyright © 2023, Pelley Group Ltd. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer