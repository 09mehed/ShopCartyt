"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideBarOpen, SetIsSideBarOpen] = useState(false)
  return (
    <>
        <button onClick={() => SetIsSideBarOpen(!isSideBarOpen)}>
            <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'></AlignLeft>
        </button>
        <div className='md:hidden'>
            <SideMenu isOpen={isSideBarOpen} onClose={() => SetIsSideBarOpen(false)}></SideMenu>
        </div>
    </>
  )
}

export default MobileMenu