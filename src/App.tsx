import { useState } from 'react'
import './App.scss'

function App() {
  const [habits, setHabits] = useState([])

  return (
    <>
      <div className="input-field">
        <input/>
        <button onClick={() => setHabits(habits)}>
          Add a habit
        </button>
      </div>

      <div className="habits">
        {habits.map((habit, index) => (
          <div key={index}>
            {habit}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
