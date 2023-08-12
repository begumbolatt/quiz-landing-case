export const fetchQuizData = async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`

  try {
    return await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log('error: ', err))
  } catch (error) {
    console.log('error: ', error)
    return []
  }
}
