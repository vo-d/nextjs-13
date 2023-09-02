import React from 'react'
import { Todo } from '@/typings'
import Link from 'next/link'

async function TodosList() {
    const todos = await fetchTodos()
  return (
    <div>
        {todos.map(todo => (
            <p key={todo.id}>
                <Link href={`/todo/${todo.id}`}>Todo: {todo.id} </Link>
            </p>
        )
        )}
    </div>
  )
}

// By default, it will run getServerSideProps when you do fetch without stating cache
const fetchTodos = async () => {
    // timeout for random number of seconds between 1 and 5
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000
    await new Promise((resolve,) => setTimeout(resolve, timeout))

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos : Todo[] = await res.json() 
    return todos
}
export default TodosList 