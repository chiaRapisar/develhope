import { useState } from 'react'
import { Container } from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container title="Clicca qui">
    <h3>Questo è il contenuto</h3>
          </Container>
    </>
  )
}

export default App
