import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetailPage = () => {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  console.log(searchParams.toString())
  console.log(searchParams.get('name'))
  console.log(location)

  return <p>User</p>
}

export default UserDetailPage
