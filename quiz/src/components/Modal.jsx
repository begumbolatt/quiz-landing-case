import React from 'react'

const Modal = ({ answer }) => {
  return (
    <div className='container items-center justify-center flex flex-col'>
      <div className='flex flex-col items-center justify-center text-start'>
        <div className='pb-1'>
          <span className='capitalize text-yellow text-5xl md:text-6xl lg:text-7xl font-bold font-prism '>
            Quiz
          </span>
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <ul className='space-y-2 border-b border-b-light-blue py-4'>
          {answer.map((item, index) => (
            <li key={index}>
              <span className='text-txt-gray-white'>
                <strong className='text-dark-blue'>{index + 1} - </strong> {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center w-full py-2 group'>
        <button
          className='flex flex-row  items-center justify-center gap-4 w-full bg-dark-blue/80 py-3 rounded-2xl group-hover:bg-dark-blue transition-colors ease-in-out duration-700'
          onClick={() => (window.location = '/')}
        >
          <span className='text-dark-light font-bold group-hover:text-txt-gray-white transition-colors ease-in-out duration-700'>
            Let's start again
          </span>
        </button>
      </div>
    </div>
  )
}

export default Modal
