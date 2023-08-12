import { React } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { ArrowRight } from 'iconoir-react'
import Zoomer from '../assets/slides/zoomer.svg'
import Artvenue from '../assets/slides/art-venue.svg'
import Hellen from '../assets/slides/Hellen.png'
import Hellena from '../assets/slides/Hellena.png'
import David from '../assets/slides/David.png'
import '@splidejs/react-splide/css/sea-green'

function Slide() {
  const slideOptions = {
    perPage: 3,
    type: 'loop',
    rewind: true,
    gap: 20,
    pagination: false,
    autoplay: true,
    speed: 2000,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
        gap: 15,
      },
      640: {
        perPage: 1,
        gap: 10,
      },
    },
  }

  const posts = [
    {
      brand: Zoomer,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image: Hellen,
      name: 'Hellen Jummy',
      title: 'team lead',
    },
    {
      brand: Artvenue,
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      image: Hellena,
      name: 'Hellena John',
      title: 'co-founder',
    },
    {
      brand: Artvenue,
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      image: David,
      name: 'David Oshodi',
      title: 'manager',
    },
    {
      brand: Artvenue,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image: Hellen,
      name: 'Mary Jummy',
      title: 'team lead',
    },
    {
      brand: Zoomer,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image: Hellena,
      name: 'Melissa Jummy',
      title: 'team lead',
    },
    {
      brand: Artvenue,
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      image: David,
      name: 'David Oshodi',
      title: 'manager',
    },
    {
      brand: Artvenue,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image: Hellen,
      name: 'Mary Jummy',
      title: 'team lead',
    },
    {
      brand: Zoomer,
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image: Hellena,
      name: 'Melissa Jummy',
      title: 'team lead',
    },
  ]

  return (
    <div className='flex flex-col bg-amber-50'>
      <div
        className='container mx-auto justify-center
            py-5'
      >
        <div className='text-left'>
          <h2 className='text-blue-gray font-bold text-3xl md:text-6xl whitespace-nowrap'>
            Because they love us
          </h2>
        </div>
      </div>
      <div className='flex container bg-amber-200 h-[277px] md:h-[390px] py-10'></div>

      <div className='relative sm:container -mt-[280px] md:-mt-[351px] lg:-mt-[355px]'>
        <Splide options={slideOptions} hasTrack={false}>
          <div className='hidden md:flex flex-wrap items-center justify-end md:flex-nowrap pb-7'>
            <div className='absolute -top-28 items-center justify-end'>
              <div className='splide__arrows splide__arrows--ltr relative z-20 flex items-center justify-start'>
                <button className='splide__arrow splide__arrow--prev group !relative !inset-0 !mr-3 !h-auto !w-auto !translate-y-0 rtl:!ml-3 rtl:!mr-0'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full border border-amber-9 text-amber-9 transition-colors duration-300 group-hover:border-amber-4 group-hover:text-amber-4'>
                    <ArrowRight size='24' />
                  </div>
                </button>
                <button className='splide__arrow splide__arrow--next group !relative !inset-0 !h-auto !w-auto !translate-y-0'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full border border-amber-9 text-amber-9 transition-colors duration-300 group-hover:border-amber-4 group-hover:text-amber-4'>
                    <ArrowRight size='24' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <SplideTrack>
            {posts.map((post, index) => (
              <SplideSlide key={index}>
                <div className='group flex w-full h-70 md:h-full flex-col overflow-hidden rounded-xl shadow-slideShadow bg-white px-3 py-4 lg:p-8 space-y-5 '>
                  <img src={post.brand} alt='brand' className='items-start' />
                  <div className='mb-2'>{post.text}</div>
                  <div className='flex flex-row bottom-0 py-3 items-center'>
                    <img src={post.image} alt='profile' />
                    <div className='flex flex-col px-2 md:px-5 whitespace-nowrap'>
                      <span>{post.name}</span>
                      <span className='text-title-blue capitalize'>{post.title}</span>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </div>
  )
}

export default Slide
