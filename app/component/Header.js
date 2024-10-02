import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-slate-600 text-white font-bold flex items-center h-10 px-12 gap-8 justify-between'>
      <h2>Logo</h2>
<div className='flex gap-8'>
<Link href='/About'>About</Link>
<Link href='/Services'>Services</Link>
<Link href='/Contact'>Contact</Link>
</div>
    </div>
  )
}

export default Header
