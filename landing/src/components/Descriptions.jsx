import React from 'react'
import Blue from '../assets/icons/blue.png'
import Green from '../assets/icons/green.png'
import Pink from '../assets/icons/pink.png'
import throphy from '../assets/icons/throphy.png'
import tunnel from '../assets/icons/tunnel.png'
import tv from '../assets/icons/tv.png'

function Descriptions() {
  const Items = [
    {
      title: 'Nibh viverra',
      description:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: throphy,
      image: Blue,
    },
    {
      title: 'Category Cursus amet',
      description:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: tunnel,
      image: Green,
    },
    {
      title: 'Ipsum fermentum',
      description:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
      icon: tv,
      image: Pink,
    },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 py-12 md:py-20 gap-8 md:gap-20'>
      {Items.map((items, index) => (
        <div
          className='flex flex-col space-y-3 text-center justify-center items-center md:items-start md:text-start md:justify-start'
          key={index}
        >
          <div className='relative flex flex-grow-0 items-start md:items-center'>
            <img src={items.image} alt='color' className='flex-grow-0' width={60} height={60} />

            <img
              src={items.icon}
              alt='icon'
              className='absolute top-1 -left-3'
              width={64}
              height={64}
            />
          </div>
          <div className='flex flex-col space-y-3 text-blue-gray text-xl pt-2'>
            <span className='font-medium'>{items.title}</span>
            <p className='line-clamp-3'>{items.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Descriptions
