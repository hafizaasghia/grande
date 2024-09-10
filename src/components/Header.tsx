import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='md:text-lg text-pink-500 flex gap-10 p-10 bg-purple-200'>
      <Link href="\">Home</Link>
      <Link href="about">about</Link>
      <Link href="contact">About contact</Link>
      <Link href="address">About address</Link>
    </div>
  )
}

export default Header
