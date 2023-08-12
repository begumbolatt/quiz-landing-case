import React from 'react'
import { ArrowRightCircle, ArrowRight } from 'iconoir-react'
import { useNavigate } from 'react-router-dom'
const Introduce = () => {
  const navigate = useNavigate()
  const total_questions = 10

  const startQuiz = () => {
    navigate(`/quiz/${total_questions}`)
  }
  return (
    <div className='container flex items-center justify-center'>
      <div className='bg-dark-light border-[0.5px] border-dark-border rounded-xl p-4'>
        <div className='flex flex-col items-center justify-center text-start'>
          <div className='pb-4'>
            <span className='capitalize text-yellow text-5xl md:text-6xl lg:text-7xl font-bold font-prism '>
              Quiz
            </span>
          </div>
        </div>
        <div className='py-4'>
          <ul className='flex flex-col space-y-4'>
            <li className='flex flex-row whitespace-nowrap gap-1'>
              <ArrowRightCircle className='text-dark fill-yellow' />
              <span>
                <strong className='text-txt-gray-white'>30 seconds</strong> for each question
              </span>
            </li>
            <li className='flex flex-row whitespace-nowrap gap-1'>
              <ArrowRightCircle className='text-dark fill-yellow' />
              <span>
                After
                <strong className='text-txt-gray-white'> 10 seconds </strong>
                you can answer the question
              </span>
            </li>
            <li className='flex flex-row whitespace-nowrap gap-1'>
              <ArrowRightCircle className='text-dark fill-yellow' />
              <span>You can not return to the previous question</span>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center w-full py-2 group'>
          <button
            className='flex flex-row  items-center justify-center gap-4 w-full bg-yellow/80 py-3 rounded-2xl group-hover:bg-yellow transition-colors ease-in-out duration-700'
            onClick={startQuiz}
          >
            <span className='text-dark-light font-bold group-hover:text-dark'>Let's Start</span>
            <ArrowRight className='text-dark-light' height={24} width={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduce
