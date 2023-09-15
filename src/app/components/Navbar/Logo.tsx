import Link from 'next/link'
import React from 'react'
import { RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri'
export default function Logo() {
  return (
    <Link href='/' className='logo'>
      <RiMenu2Fill /><span className='logo'>HARD</span>job
    </Link>
  )
}
