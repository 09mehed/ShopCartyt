import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/",
        icon: <Youtube className='w-5 h-5'></Youtube>
    },
    {
        title: "Github",
        href: "https://github.com/09mehed",
        icon: <Github className='w-5 h-5'></Github>
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/md-foysal-al-mamun/",
        icon: <Linkedin className='w-5 h-5'></Linkedin>
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/fs.foysalst",
        icon: <Facebook className='w-5 h-5'></Facebook>
    }
]

interface Props {
    className?: string;
    iconClassName?: string;
    TooltipClassName?: string;
}

const SocialMedia = ({className, iconClassName, TooltipClassName}: Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5", className)}>
            {
                socialLink?.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Link key={item?.title} target='blank' rel='noopener noreferrer' href={item?.href} className={cn("p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect", iconClassName)}>
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn("bg-white text-darkColor font-semibold", TooltipClassName)}>
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                ))
            }
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia