import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
        <h1 className='font-bold text-center text-5xl text-red-500' >{error.status} - {error.statusText}</h1>
        <p className='font-bold text-center text-lg mt-20' >The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound