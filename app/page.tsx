import React, { Suspense } from 'react'
import TodosList from './(users)/todo/TodosList'

function Home() {
  return (
    <div>
      
      {/* suspense lets you display a fallback until its children have finished loading. */}
      <Suspense fallback={<p>Loading the Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>
      

      <Suspense fallback={<p>Loading the Shopping Trolley...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>
      
    </div>
  )
}

export default Home