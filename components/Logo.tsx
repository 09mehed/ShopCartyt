import { cn } from '@/lib/utils'
import React from 'react'

const Logo = ({className, spanDesign}: {className: string, spanDesign?:string}) => {
  return (
    <div>
        <h2 className={cn("text-2xl text-shop-dark-green font-black tracking-wide uppercase hover:text-shop-light-green hoverEffect group font-sans cursor-pointer", className)}>
            Shopcar<span className={cn("text-shop-light-green group-hover:text-shop-dark-green hoverEffect", spanDesign)}>t</span>
        </h2>
    </div>
  )
}

export default Logo