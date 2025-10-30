import React from 'react'
// import { BulletingListComponent } from '../navbar/nav-opt-component'
import { IoMdCheckmark } from 'react-icons/io';

const SEOBenefit = ['Recover lost traffic', 'Recover lost traffic','Recover lost traffic',]
const BannerCTA = () => {
  return (
    <div>
        <div>
            <h1 className='text-[var(--interswitch-blue)] text-[60px] font-bold '>Grow your business with <span> SEO strategy </span></h1>
        </div>
        <div>
            (like 0 to 1000 new sales per month kind of results)
        </div>
        <div>
            {/* <BulletingListComponent options={SEOBenefit} icon={IoMdCheckmark} /> */}
        </div>
        <div></div>
    </div>
  )
}

export default BannerCTA