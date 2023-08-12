import React from 'react'
import { Check } from 'iconoir-react'
import Desktop from '../assets/Desktop.png'
import Deco from '../assets/Deco-video.png'
import { Link } from 'react-router-dom'
function Join() {
  const boxShadow = {
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
  }
  return (
    <div className='bg-amber-50 py-4 md:py-40'>
      <div
        className='container flex flex-col lg:flex-row bg-white rounded-[30px] items-center justify-center md:justify-between'
        style={boxShadow}
      >
        <div className='flex flex-col text-blue-gray text-start px-6 pb-6 pt-10 md:p-20'>
          <h1 className='text-3xl text-center md:text-start md:text-4xl lg:text-6xl font-extrabold whitespace-nowrap'>
            Why join us
          </h1>
          <ul className='py-6 space-y-2'>
            <li className='flex flex-row items-center space-x-3 md:whitespace-nowrap'>
              <Check color='#15803D' width={24} height={24} />
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </li>
            <li className='flex flex-row items-center space-x-3'>
              <Check color='#15803D' width={24} height={24} />
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </li>
            <li className='flex flex-row items-center space-x-3'>
              <Check color='#15803D' width={24} height={24} />
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </li>
          </ul>
          <button className='z-10 brown-sign-up-button w-full md:w-2/3 py-2 px-4 xs:p-4 '>
            Sign up now
          </button>
        </div>
        <Link
          to='https://www.youtube.com/watch?v=1VNQB0SYLII'
          target='_blank'
          className='relative flex pb-5 md:p-20 select-none items-center '
        >
          <img src={Deco} alt='deco' className='absolute left-0 z-0 transform' />
          <img src={Desktop} alt='video' className='cursor-pointer z-10 pr-5' />
        </Link>
      </div>
    </div>
  )
}

export default Join
