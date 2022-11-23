import Link from 'next/link'
import React from 'react'
import style from '../../../styles/Navbar.module.scss'
const Navbar = () => {
  return (
    <div className={style.nav_bar_container}>
        <Link href="/">Home</Link>
        <Link href="/no_face">No face</Link>
        <Link href="/tunnel">Tunnel</Link>
    </div>
  )
}

export default Navbar