import { React, useState, useEffect } from 'react'
import { Circle } from 'iconoir-react'

const QuestionCard = ({ questionsData, setAnswer, count, setCount, modal, setModal }) => {
  const [timer, setTimer] = useState(30)
  const [isLoading, setIsLoading] = useState(false)

  const approvedChoice = (event) => {
    const selectedAnswer = event.currentTarget.value
    setAnswer((prevAnswers) => [...prevAnswers, selectedAnswer])
    setCount(count + 1)
    if (count === 9) setModal(true)
    setTimer(30)
    setIsLoading(!isLoading)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1)
        setTimer(30)
      } else if (count >= 10) {
        setModal(true)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [timer])

  return (
    <div className='container flex items-center justify-center'>
      <div className='bg-dark-light border-[0.5px] border-dark-border rounded-xl p-4'>
        <div className='flex flex-col space-y-4 p-4 md:space-y-8 md:p-8'>
          <div className='flex items-center justify-center text-center'>
            <span className='text-yellow bg-dark rounded-full w-10 h-10 pt-2 font-bold font-rubik border-[0.5px] border-yellow'>
              {timer}
            </span>
          </div>
          <div className='flex flex-row text-yellow items-center  gap-1'>
            {/* <span className='flex items-center bg-dark justify-center border-[1px] border-yellow rounded-full w-5 h-5 text-xs'>
              {count + 1}
            </span> */}
            <span className='text-txt-gray-white capitalize'>
              <strong>{count + 1}</strong> - {questionsData[count]?.title}
            </span>
          </div>
          <div>
            <ul className='space-y-4 capitalize'>
              {questionsData[count]?.selectBody?.map((answer, i) => (
                <li key={i}>
                  <button
                    className='flex flex-row gap-1 items-center cursor-pointer group'
                    onClick={approvedChoice}
                    value={answer}
                    disabled={timer > 20}
                  >
                    <Circle
                      className={`flex-shrink-0 ${
                        timer > 20 ? 'text-dark-border' : 'text-yellow group-hover:fill-yellow'
                      }`}
                      width={16}
                      height={16}
                    />
                    <span
                      className={` text-start first-letter:capitalize ${
                        timer > 20 ? 'text-txt-gray' : 'group-hover:text-txt-gray-white'
                      }`}
                    >
                      {answer}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
