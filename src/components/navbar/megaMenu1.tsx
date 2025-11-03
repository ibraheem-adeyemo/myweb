import React, { Fragment } from 'react'
import { MegaMenucard } from './type'
import { Icon } from '@mui/material'
import { sampleServices } from '@/data'
import Image from 'next/image'
import Button from '../general/form/custom-button'
import USerImage from '../../../public/images/home-page-img/avatar.webp'
import Link from 'next/link'

const MegaMenuCard = ({title, description, href, icon: Icon}: MegaMenucard) => {
    
    return(
        <Link href={href} className='border border-1px border-[var(--neutral-300)] hover:bg-primary-blue-100 text-[var(--text-primary)] mr-[1rem] p-[1rem] rounded-[15px] mb-[2rem]'>
            <div className='flex'>
                {Icon && <div className='flex bg-primary-blue-400 p-[4px] rounded-[10px] text-white mr-[1rem]'>
                    <Icon className="my-auto"  />
                </div>}
                <h1 className="font-bold">{title}</h1>
            </div>
            <div>
                { description && <h5 className='text-[16px]'>{description}</h5>}
            </div>
        </Link>
    )
}
export const MegaMenu1 = () => {
  return (
    <div className='w-[1320px] rounded-lg'>
        <div className='flex justify-between'>
            <div className='p-4 w-[78%]'>
                <div className='grid grid-cols-3'>
                    {
                        sampleServices.map((service, i) => {
                            return (
                                <Fragment key={i}>
                                    <MegaMenuCard title={service.title} href={service?.href} description={service?.subtitle} icon={service.icon} />
                                </Fragment>
                            )
                        })
                    }
                </div>
                <div className='flex gap-2'>
                    <Button text='Get Free Consultation' className='bg-[black]' />
                    <Button text='Get Free Consultation' />
                    <Button text='Get Free Consultation' />
                </div>
            </div>
            <div className='flex flex-col justify-between w-[22%] bg-black text-white py-[2rem] px-[2rem] font-bold'>
                <div className='flex gap-4 text-[13px] items-center'>
                    <div>
                        <Image src={USerImage} alt='' />
                    </div>
                    <div className='flex flex-col gap-1 h-[50px]'>
                        <span>Maverick Phoenix</span>
                        <span>CEO at Innomax</span>
                    </div>
                </div>
                <div>
                    <h5>
                        “As CEO at Innomax, I’ve worked hard to clarify client requirements and deliver results efficiently without reinventing the wheel.”
                    </h5>
                </div>
            </div>
        </div>
    </div>
  )
}
