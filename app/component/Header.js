import React from 'react'
import Link from 'next/link'
const Header = () => {
return (
    <div className='navbar'>
      <h2>Logo</h2>
<div className='navbar container'>
<Link href='/About'>About</Link>
<Link href='/Services'>Services</Link>
<Link href='/Contact'>Contact</Link>
</div>
    </div>
  )
}

export default Header
