import React from 'react'
// import { BulletingListComponent } from '../navbar/nav-opt-component'
import { IoMdCheckmark } from 'react-icons/io';
import Button from '../general/form/custom-button';

const SEOBenefit = ['Recover lost traffic', 'Boost organic traffic','Get more sales',]
export const HomeBannerCTA = () => {
  return (
    <div className='flex flex-col w-1/2 gap-10'>
        <div>
            <h1 className='text-[var(--interswitch-blue)] text-[60px] font-bold leading-[5rem]'>Grow your business with <span> SEO strategy </span></h1>
        </div>
        <div>
            <p className='font-bold text-[24px] text-text-secondary'>(like 0 to 1000 new sales per month kind of results)</p>
        </div>
        <div className='flex flex-col gap-3'>
            {
                SEOBenefit.map((seo, i) => {
                    return(
                        <div key={i} className='flex gap-3 text-text-primary font-bold'>
                            <IoMdCheckmark />
                            {seo}
                        </div>
                    )
                })
            }
        </div>
        <div className='w-1/2'>
            <Button text='Book a free consultation' />
        </div>
    </div>
  )
}
