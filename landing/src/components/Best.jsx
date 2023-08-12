import React from 'react'
import firstImage from '../assets/best/first-card.png'
import secondImage from '../assets/best/second-card.png'
import thirdImage from '../assets/best/third-card.png'
import { Cart } from 'iconoir-react'
function Best() {
  const Items = [
    {
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      image: firstImage,
    },
    {
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      image: secondImage,
    },
    {
      title: 'Title',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      image: thirdImage,
    },
  ]
  return (
    <div className='bg-blue-gray py-12 md:py-20'>
      <div className='flex flex-col'>
        <div className='container flex flex-col text-white space-y-6 md:space-y-0 justify-center items-center md:justify-between md:flex-row space-x-5'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-extrabold'>The best of the best</h1>
          <button className='best-sign-up-button whitespace-nowrap'>Sign up now</button>
        </div>
        <div className='container items-center py-8 md:py-12 lg:py-20 bg-backlights-mobile md:bg-backlights bg-cover bg-no-repeat'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20'>
            {Items.map((item, index) => (
              <div
                className='group flex flex-col rounded-md bg-blue-gray shadow-lightShadow overflow-hidden'
                key={index}
              >
                <img
                  src={item.image}
                  alt='images'
                  className='group-hover:opacity-50 object-contain rounded-t-md select-none'
                />
                <div className='flex flex-col text-white  px-6 pt-6 lg:px-8 lg:pt-8 space-y-4'>
                  <span className='text-2xl font-bold'>{item.title}</span>
                  <p className='leading-7 '>{item.description}</p>
                </div>
                <div className='flex text-center items-center justify-center w-full p-6 lg:p-8'>
                  <button className='buy-button'>
                    <Cart className='flex-shrink-0' width={24} height={24} />
                    <span className='px-4'>Buy now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best
