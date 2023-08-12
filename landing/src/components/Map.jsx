import React from 'react'
import Comment from '../assets/map/comment.png'
import Country from '../assets/map/Ellipses.png'
import map from '../assets/map/chart.png'
import MapMobile from '../assets/map/chart-mobile.png'
import CountryMobile from '../assets/map/ellipses-mobile.png'

function Map() {
  return (
    <div className='bg-amber-9  overflow-hidden'>
      <div className='md:container items-center '>
        <div className='flex items-center justify-center min-h-screen'>
          <img src={map} alt='map' className='object-contain z-0 absolute md:block hidden' />
          <img src={Country} alt='ellipses' className='object-contain absolute md:block hidden' />

          <img
            src={MapMobile}
            alt='map'
            className='object-contain absolute right-0 z-0 md:hidden'
          />
          <img
            src={CountryMobile}
            alt='ellipses'
            className='object-contain absolute right-0  md:hidden'
          />
          <div className='relative z-20'>
            <div className='items-start'>
              <img
                src={Comment}
                alt='comment'
                className='absolute left-1 md:-left-1/4 lg:-left-2/4 bottom-1/2'
              />
            </div>
            <div className='flex flex-col text-white pl-10 md:pl-0 md:pt-12 lg:pt-0'>
              <span className='text-4xl md:text-8xl font-extrabold'>11,658,447</span>
              <span className='text-3xl md:text-6xl font-extrabold'>Shoes Collected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
