import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

interface ContactItemData {
    title: string;
    subTitle: string;
    icon: React.ReactNode
}

const data: ContactItemData[] = [
    {
        title: 'Visit us',
        subTitle: 'New Orlean, USA',
        icon: (
            <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'></MapPin>
        ),
    },
    {
        title: 'Call us',
        subTitle: '+8801619-388873',
        icon: (
            <Phone className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'></Phone>
        ),
    },
    {
        title: 'Working-Hours',
        subTitle: 'Mon-Sat:10:00 - 07:00 PM',
        icon: (
            <Clock className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'></Clock>
        ),
    },
    {
        title: 'Email Us',
        subTitle: 'ShopCart@gmail.com',
        icon: (
            <Mail className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'></Mail>
        ),
    },
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
        {
            data?.map((item, index) => (
                <div key={index} className='flex items-center gap-2 group hover:bg-gray-50 p-4 transition-colors hoverEffect'>
                    {item?.icon}
                    <div>
                        <h3 className='font-semibold text-gray-900 group-hover:text-black hoverEffect'>{item?.title}</h3>
                        <p className='text-gray-600 text-sm group-hover:text-gray-900 hoverEffect'>{item?.subTitle}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FooterTop