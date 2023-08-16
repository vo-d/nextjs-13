import React from 'react'
import {Todo} from '../../typings'
import Link from 'next/link'

async function TodosList() {
    const todos = await fetchTodos()
  return (
    <div>
        {todos.map(todo => (
            <p>
                <Link href={`/todo/${todo.id}`}>Todo: {todo.id} </Link>
            </p>
        )
        )}
    </div>
  )
}

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos : Todo[] = await res.json() 
    return todos
}
export default TodosList 