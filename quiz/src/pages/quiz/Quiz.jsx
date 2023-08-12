import { React, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '../../components/Modal'
const Quiz = () => {
  // const amount = useParams()
  const [questionsData, setQuestionsData] = useState([])
  const [answer, setAnswer] = useState([])
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData()
      const shuffledData = data.sort(() => Math.random() - 0.5).slice(0, 10)

      const lastData = shuffledData.map((item) => {
        const selectBody = item.body.split('\n')
        return { ...item, selectBody }
      })

      setQuestionsData(lastData)
    }
    getData()
  }, [])

  return (
    <div>
      {modal ? (
        <Modal answer={answer} />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          setAnswer={setAnswer}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  )
}

export default Quiz
