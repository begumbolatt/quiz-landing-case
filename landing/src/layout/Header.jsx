import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import menuItems from '../constants/menuItems'
import { MenuScale, Cancel } from 'iconoir-react'
function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu)
  }

  return (
    <div className='relative z-50 bg-white md:bg-amber-1 py-4'>
      <nav className='container'>
        <ul className='flex items-center justify-between select-none whitespace-nowrap'>
          <li className='flex-shrink-0 text-3xl font-bold text-amber-9'>
            <Link to='/'>Collers</Link>
          </li>
          <li className='md:hidden' onClick={toggleMobileMenu}>
            {!isMobileMenu ? (
              <>
                {' '}
                <MenuScale
                  color='#78350F'
                  className='flex-shrink-0 scale-x-[-1]'
                  height={24}
                  width={24}
                />
              </>
            ) : (
              <>
                <Cancel color='#78350F' className='flex-shrink-0' height={24} width={24} />
              </>
            )}
          </li>
          <li className='hidden md:block'>
            <ul className='flex items-center justify-between'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.id === 'sing-up' ? (
                    <>
                      <button className='brown-sign-up-button p-3'>{item.name}</button>
                    </>
                  ) : (
                    <>
                      <Link to='#' className='relative text-amber-9 px-3 capitalize'>
                        {item.name}
                      </Link>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {isMobileMenu && (
          <div className='absolute left-0 top-full z-50 h-[calc(100vh-100%)] w-full'>
            <div className='h-full bg-white'>
              <ul className='h-full flex flex-col items-end'>
                {menuItems.map((item, index) => (
                  <li className='w-full py-4 border-b-2 border-blue-gray/10' key={index}>
                    <div className='flex w-full flex-row items-center justify-between px-10'>
                      <Link to='#' className='relative capitalize mx-2 text-amber-9'>
                        {item.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
    // <div className='h-20 bg-white md:bg-amber-50 md:h-24'>
    //   <nav className='container'>
    //     <div className='flex items-center justify-between mt-5 whitespace-nowrap'>
    //       <div className='flex-shrink-0 text-3xl font-bold text-amber-9'>
    //         <Link to='/'>Collers</Link>
    //       </div>
    //       <div className='flex items-center space-x-4 md:space-x-8'>
    //         <div className='hidden items-center space-x-4 text-white md:flex'>
    //           {menuItems.map((item, index) => (
    //             <div className='text-base text-amber-9 font-medium '>
    //               {item.id === 'sing-up' ? (
    //                 <div key={item.id}>
    //                   <button className='brown-sign-up-button p-3'>{item.name}</button>
    //                 </div>
    //               ) : (
    //                 <div
    //                   className='capitalize transition ease-in-out duration-700 hover:text-amber-200'
    //                   key={index}
    //                 >
    //                   <Link to={item.path}>
    //                     <span>{item.name}</span>
    //                   </Link>
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //         </div>
    //         <button className='block md:hidden ' onClick={toggleMobileMenu}>
    //           <MenuScale color='#78350F' height={24} width={24} />
    //         </button>
    //       </div>
    //     </div>
    //     {isMobileMenu && (
    //       <div className='fixed left-0 top-0 z-20 flex h-full w-full flex-col justify-between bg-white lg:hidden'>
    //         <div className='flex h-full flex-col select-none'>
    //           <div className='container flex !h-20 items-center justify-between bg-white px-4'>
    //             <span className='text-3xl font-bold text-amber-9'>Collers</span>
    //             <button className='block md:hidden' onClick={toggleMobileMenu}>
    //               <Cancel color='#78350F' height={24} width={24} />
    //             </button>
    //           </div>
    //           <div className='flex h-full flex-col space-y-4 overflow-y-scroll bg-txt text-white'>
    //             {menuItems.map((item, index) => (
    //               <div className='text-base text-amber-9 border-b-[1px] py-2 border-blue-gray-2 w-full font-medium'>
    //                 <div className='capitalize px-4' key={index}>
    //                   <Link to={item.path}>
    //                     <span className='container'>{item.name}</span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </nav>
    // </div>
  )
}

export default Header
