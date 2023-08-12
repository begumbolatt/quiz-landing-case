import React from 'react'
import GrowButtons from './GrowButtons'

function Grow() {
  return (
    <div className='bg-amber-50'>
      <div className='flex flex-col pt-20'>
        <div className='container text-blue-gray text-center md:text-start flex flex-col gap-8 pb-10'>
          <h2 className='text-2xl whitespace-nowrap md:text-6xl font-extrabold'>
            Grow Your Collection
          </h2>
          <p className='text-base md:leading-8 md:text-lg'>
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed
            interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        <GrowButtons />
      </div>
    </div>
  )
}

export default Grow
