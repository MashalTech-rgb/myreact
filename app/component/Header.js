import React from 'react'
import Link from 'next/link'
const Header = () => {
return (
    <div className='bg-black text-white font-bold flex items-center h-14 px-20 gap-3 justify-between'>
      <img src='https://images.search.yahoo.com/images/view;_ylt=Awrihi.Qav1mA.AHvy6JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY1Nzk5M2Y1ZTJkNWE5NzBmYjhiOTM5M2I4ZTU2ZDBjBGdwb3MDMTEEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogo%2Bdesign%2Bbeautiful%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D11&w=600&h=320&imgurl=digitalsynopsis.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fbeautiful-gradient-logo-designs-1.jpg&rurl=https%3A%2F%2Fwww.animalia-life.club%2Fqa%2Fpictures%2Fbeautiful-logo-design.html&size=55KB&p=logo+design+beautiful&oid=657993f5e2d5a970fb8b9393b8e56d0c&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Beautiful+Logo+Design&b=0&ni=90&no=11&ts=&tab=organic&sigr=scw2P1gZujkO&sigb=pZSe7rTmAR43&sigi=J1o9_sCLDGi2&sigt=Ox9q.z.DlrSG&.crumb=UevqJE0yRBz&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0'/>
<div className='flex gap-20'>
<Link href='/About'>About</Link>
<Link href='/Services'>Services</Link>
<Link href='/Contact'>Contact</Link>
</div>
    </div>
  )
}

export default Header
