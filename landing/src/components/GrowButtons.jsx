import React from 'react'
import { Search, Podcast, ModernTv, ShieldCheck, Rocket, ArrowRight, Settings } from 'iconoir-react'
import Col from '../assets/Col.png'
function GrowButtons() {
  const buttons = [
    {
      name: 'Bibendum tellus',
      icon: Search,
    },
    {
      name: 'Cras eget',
      icon: ShieldCheck,
    },
    {
      name: 'Dolor pharetra',
      icon: Rocket,
    },
    {
      name: 'Amet, fringilla',
      icon: ModernTv,
    },
    {
      name: 'Amet nibh',
      icon: Podcast,
    },
    {
      name: 'Sed velit',
      icon: Settings,
    },
  ]

  return (
    <div className='bg-waves bg-cover md:pb-52'>
      <div className='container flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center overflow-hidden'>
        <div className='flex flex-row md:flex-col overflow-x-scroll w-96 md:w-60 md:overflow-x-hidden'>
          {buttons.map((item, index) => (
            <div className='flex md:flex-col py-1 select-none group' key={index}>
              <button className='flex text-blue-gray whitespace-nowrap flex-row items-center gap-2 md:gap-4 group-hover:bg-white group-hover:shadow-boxShadow rounded-lg p-2 md:p-4 justify-between'>
                <span className='flex items-center'>
                  <span className='mr-2'>
                    <item.icon width={24} height={24} />
                  </span>
                  <span className='text-start'>{item.name}</span>
                </span>
                <span className='text-transparent group-hover:text-blue-gray self-center'>
                  <ArrowRight />
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className='md:ml-5 md:pt-9 md:w-1/2 z-10'>
          <img src={Col} alt='desktop' />
        </div>
      </div>
    </div>
  )
}

export default GrowButtons
