import React from 'react'
import shoesImage from '../assets/shoes-bg.png'
import { Play } from 'iconoir-react'
import { Link } from 'react-router-dom'
import Descriptions from './Descriptions'
function Hero() {
  return (
    <div className='bg-hero-mobile md:bg-hero p-8'>
      <div className='container flex flex-col items-center justify-center md:justify-between space-x-10 py-12 md:py-20 space-y-4 md:space-y-0 md:flex-row '>
        <div className='flex flex-col space-y-5 xs:space-y-9 text-blue-gray text-center md:text-start'>
          <h1 className='text-5xl md:text-7xl font-extrabold'>Collectible Sneakers</h1>
          <p className=' md:text-lg font-normal'>
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem{' '}
            <br className='hidden md:block' />
            mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className='flex flex-row space-x-8 whitespace-nowrap items-center justify-between md:justify-start select-none'>
            <button className='brown-sign-up-button py-2 px-4 xs:p-4 '>Sign up now</button>
            <Link
              to='https://www.youtube.com/watch?v=lky2P_aw6nc'
              target='_blank'
              className='flex flex-row items-center text-amber-9 group'
            >
              <Play
                width={24}
                height={24}
                className='group-hover:fill-amber-4 group-hover:transition-colors group-hover:ease-in-out group-hover:duration-300'
              />
              <span className='group-hover:text-amber-9'>Watch Demo</span>
            </Link>
          </div>
        </div>
        <div className='flex-shrink-0 select-none'>
          <img
            src={shoesImage}
            alt='shoes'
            className='md:w-[243px] md:h-[216px] lg:w-[486px] lg:h-[423px] object-cover'
          />
        </div>
      </div>
      <Descriptions />
    </div>
  )
}

export default Hero
