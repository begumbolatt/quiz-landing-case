import React from 'react'
import { Link } from 'react-router-dom'
import { AppleMac } from 'iconoir-react'
import { YouTube, Facebook, Twitter, Instagram, LinkedIn, Globe } from 'iconoir-react'

function Footer() {
  return (
    <div className='group flex h-full min-h-[300px] w-full flex-col z-30 justify-items-stretch bg-blue-gray overflow-hidden text-blue-gray-2'>
      <div className='container my-8 flex h-full flex-col space-y-6'>
        <div className='flex flex-col md:flex-row items-center text-center md:text-start justify-between gap-0 space-y-4 md:space-y-0'>
          <div className='flex flex-col'>
            <Link
              to='/https://www.nike.com/tr/'
              target='_blank'
              className='py-3 text-white font-medium'
            >
              Product
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Pricing
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Overview
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Browse
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Accessibility
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Five
            </Link>
          </div>
          <div className='flex flex-col'>
            <Link
              to='/https://www.nike.com/tr/'
              target='_blank'
              className='py-3 text-white font-medium'
            >
              Solutions
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Brainstorming
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Ideation
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Wireframing
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Research
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Design
            </Link>
          </div>
          <div className='flex flex-col'>
            <Link
              to='/https://www.nike.com/tr/'
              target='_blank'
              className='py-3 text-white font-medium'
            >
              Support
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Contact Us
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Developers
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Documentation
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Integrations
            </Link>
            <Link to='/https://www.nike.com/tr/' target='_blank' className='py-3'>
              Reports
            </Link>
          </div>
          <div className='flex flex-col space-y-5'>
            <span className='text-white py-3 font-medium'>Get the App</span>
            <Link
              className='flex w-fit items-center space-x-2 rounded-2xl bg-black px-6 py-3 text-left text-white border-2 border-white'
              target='_blank'
              to='/'
            >
              <div>
                <AppleMac className='text-white' width={40} height={40} />
              </div>
              <div className='flex flex-col -space-y-1 whitespace-nowrap'>
                <span className='text-xs'>Download on the</span>
                <span className='text-2xl font-bold'>App Store</span>
              </div>
            </Link>

            <Link
              className='flex w-fit items-center space-x-2 rounded-2xl bg-black border-2 border-white px-6 py-3 text-left'
              target='_blank'
              to='/'
            >
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40px'
                  height='40px'
                  viewBox='0 0 256 283'
                >
                  <path
                    fill='#EA4335'
                    d='M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934l-61.896-67.282Z'
                  ></path>
                  <path
                    fill='#FBBC04'
                    d='M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537h.177Z'
                  ></path>
                  <path
                    fill='#4285F4'
                    d='M1.06 23.487A30.565 30.565 0 0 0 0 31.61v219.327a32.333 32.333 0 0 0 1.06 8.124l122.555-120.966L1.06 23.487Z'
                  ></path>
                  <path
                    fill='#34A853'
                    d='m120.436 141.274l61.278-60.483L48.564 4.503A32.847 32.847 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399l119.376 117.875Z'
                  ></path>
                </svg>
              </div>
              <div className='flex flex-col -space-y-2 whitespace-nowrap'>
                <span className='text-xs'>GET IT ON</span>
                <span className='text-2xl'>Google Play</span>
              </div>
            </Link>

            <div className='flex flex-col space-y-4'>
              <span>Follow Us</span>
              <div className='flex flex-row items-center justify-center md:justify-start gap-4'>
                <Link to='https://baykartech.com/tr/' target='_blank'>
                  <YouTube
                    width={24}
                    height={24}
                    className='hover:text-red-500 transition-colors ease-in-out duration-500'
                  />
                </Link>
                <Link to='https://baykartech.com/tr/' target='_blank'>
                  <Facebook
                    width={24}
                    height={24}
                    className='fill-white hover:text-blue-800 transition-colors ease-in-out duration-500'
                  />
                </Link>
                <Link to='https://baykartech.com/tr/' target='_blank'>
                  <Twitter
                    width={24}
                    height={24}
                    className='fill-white hover:text-twitter transition-colors ease-in-out duration-500'
                  />
                </Link>
                <Link to='https://baykartech.com/tr/' target='_blank'>
                  <Instagram
                    width={24}
                    height={24}
                    className='hover:text-instagram transition-colors ease-in-out duration-500'
                  />
                </Link>
                <Link to='https://www.linkedin.com/in/begumbolat/' target='_blank'>
                  <LinkedIn
                    width={24}
                    height={24}
                    className='hover:text-linkedin transition-colors ease-in-out duration-500'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between border-t-2 border-white/40'>
          <span className='py-6'>Collers @ 2023. All rights reserved.</span>
          <div className='flex items-center justify-evenly gap-5'>
            <Link to='/'>Terms</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Contact</Link>
            <Link to='/' className='flex flex-row items-center gap-1'>
              <Globe height={24} width={24} />
              EN
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
