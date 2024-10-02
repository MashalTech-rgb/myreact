import React from 'react'
import Link from 'next/link'
const Header = () => {
return (
    <div className='bg-black text-white font-bold flex items-center h-14 px-20 gap-3 justify-between'>
      <img className='img'/>
<div className='flex gap-20'>
<Link href='/About'>About</Link>
<Link href='/Services'>Services</Link>
<Link href='/Contact'>Contact</Link>
</div>
    </div>
  )
}

export default Header
