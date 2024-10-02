import React from 'react'
import Link from 'next/link'
const Header = () => {
return (
    <div className='bg-black text-white font-bold flex items-center h-14 px-20 gap-3 justify-between'>
      <img src='https://images.search.yahoo.com/images/view;_ylt=AwrNPZb7aP1mRdIanWuJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzdiZTk4ODk4NzIwYjkyYmNmZjE4M2U4YWQwMDAwNzY4BGdwb3MDMTQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogo%2Bdesign%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D14&w=2084&h=2084&imgurl=static.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F390%2F524%2Foriginal%2Fmodern-company-logo-design-vector.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F390524-modern-company-logo-design-vector&size=521KB&p=logo+design&oid=7be98898720b92bcff183e8ad0000768&fr2=piv-web&fr=mcafee&tt=Modern+company+logo+design+vector+-+Download+Free+Vectors%2C+Clipart+...&b=0&ni=21&no=14&ts=&tab=organic&sigr=RlRQGO_TP3OX&sigb=2VlYyA7JHnrh&sigi=1IvZ.n0OqgyJ&sigt=Yy52sbEO0GeF&.crumb=UevqJE0yRBz&fr=mcafee&fr2=piv-web&type=E210US91215G0'/>
<div className='flex gap-20'>
<Link href='/About'>About</Link>
<Link href='/Services'>Services</Link>
<Link href='/Contact'>Contact</Link>
</div>
    </div>
  )
}

export default Header
