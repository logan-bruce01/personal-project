import { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import Header from './Header.tsx'
import Form from './Form.tsx'

function HomePage() {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   async function updateGreeting() {
  //     try {
  //       const greeting = await getGreeting()
  //       setGreeting(greeting)
  //       setIsError(false)
  //     } catch (err) {
  //       setIsError(true)
  //     }
  //   }

  //   updateGreeting()
  // }, [count])

  return (
    <>
      <Form />
    </>
  )
}

export default HomePage
