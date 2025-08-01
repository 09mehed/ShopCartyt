import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between'>
        <div className='space-y-5'>
            <Title className='mb-5'>
                Grab up to 50% off on <br />
                Selected headphones
            </Title>
            <Link href={'/shop'} className='bg-shop-btn-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect'>
                shop
            </Link>
        </div>
        <div>
            <Image src={banner_1} className='hidden md:inline-flex w-96' alt='bannerImg'></Image>
        </div>
    </div>
  )
}

export default HomeBanner