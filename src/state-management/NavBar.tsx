import { useContext } from 'react'
import LoginStatus from './auth/LoginStatus'
import TasksContext from './tasks/tasksContext'
import useCounterStore from './counter/store'

const NavBar = () => {
  const counter = useCounterStore(s => s.counter) // compo will only render if counter changes

  console.log('Render NavBar')

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  )
}

export default NavBar
