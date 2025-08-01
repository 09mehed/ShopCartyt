import React from 'react'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './ui/text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Button } from './ui/button'

const FooterBottom = () => {
    return (
    <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='space-y-4'>
            <Logo className=''></Logo>
            <SubText>Discover curated furniture collections at Shopcartyt, blending style and comfort to elevate your living spaces.</SubText>
            <SocialMedia 
            className='text-darkColor/60' 
            iconClassName='border-darkColor/60 hover:border-shop-light-green hover:text-shop-light-green' 
            TooltipClassName='bg-darkColor text-white'>
            </SocialMedia>
        </div>
        <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className='space-y-3 mt-4'>
                {
                    quickLinksData?.map((item) => (
                        <li key={item?.title}>
                            <Link href={item?.href} className='hover:text-shop-light-green hoverEffect font-medium'>
                                {item?.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div>
            <SubTitle>Categories</SubTitle>
            <ul className='space-y-3 mt-4'>
                {
                    categoriesData?.map((item) => (
                        <li key={item?.title}>
                            <Link href={`category/${item?.href}`} className='hover:text-shop-light-green hoverEffect font-medium'>
                                {item?.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='space-y-4'>
            <SubTitle>NewsLatter</SubTitle>
            <SubText>Subscribe to our newsletter to receive updates and exclusive offers.</SubText>
            <form className='space-y-3'>
                <input placeholder='Enter Your Email' type='email' required/>
                <Button className='w-full'>Subscribe</Button>
            </form>
        </div>
    </div>
    )
}

export default FooterBottom