import React from 'react';
import notFound from "../images/error.jpg"

function NotFoundPage() {
  return (
    <div className='not-found'><img src={notFound} alt="" /></div>
  )
}

export default NotFoundPage