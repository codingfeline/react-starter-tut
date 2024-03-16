import { Fragment, useState } from 'react'
import usePosts from './hooks/usePosts'

const PostList = () => {
  const pageSize = 10
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({
    pageSize,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        className="btn btn-primary my-1"
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </>
  )
}

export default PostList
