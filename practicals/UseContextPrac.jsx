import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
function UseContextPrac() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      style={{
        background: theme === 'light' ? '#a6a4a4' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px'
      }}
    >
      <h2>useContext Practical</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
export default UseContextPrac