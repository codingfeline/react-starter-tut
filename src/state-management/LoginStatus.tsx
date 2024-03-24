import useAuth from './hooks/useAuth'

const LoginStatus = () => {
  // const [user, setUser] = useState('')
  const { user, dispatch } = useAuth()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: 'LOGOUT' })} href="#">
            Logout
          </a>
        </div>
      </>
    )
  return (
    <div>
      <a onClick={() => dispatch({ type: 'LOGIN', username: 'nazie.sharid' })} href="#">
        Login
      </a>
    </div>
  )
}

export default LoginStatus
