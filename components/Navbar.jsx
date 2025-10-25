import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar bg-slate-900 text-white flex items-center justify-between px-6 py-1">
      <div className="logo"><img src="/logo.svg" width={160} alt="BitLinks" /></div>
      <div className="links flex gap-6">
        <Link href="#" className='px-3 py-2'>Features</Link>
        <Link href="#" className='px-3 py-2'>Pricing</Link>
        <Link href="#" className='px-3 py-2'>Resources</Link>
      </div>
      <div className="auth flex gap-4">
        <Link href="#" className="login ">Login</Link>
        <Link href="#" className="signup">Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar
