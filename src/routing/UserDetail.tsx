import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetail = () => {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const user = searchParams.get('name')
  console.log(searchParams.toString())
  if (user) console.log(searchParams.get('name'))
  console.log(location)

  return (
    <p>
      User: {user && user} {params.id}
    </p>
  )
}

export default UserDetail
