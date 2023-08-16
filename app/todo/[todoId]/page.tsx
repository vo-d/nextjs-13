import { Todo } from '@/typings'
import React from 'react'

// PageProps contains the params and params contains the todoId, which is the name of the folder. This name will change based on the slug since it is multipages folder.
// by defining type for the PageProps, we can restrict the amount of data that can be used in it.
type PageProps = {
    params:{
        todoId: string
    }
}

async function TodoPage({params:{todoId}} : PageProps) {
    const todo = await fetchTodo(todoId)
    return (
        <div className='p-0 bg-yellow-200 border-2 m-2 shadow-lg'>
            <p>
                #{todo.id} : {todo.title}
            </p>
            <p>Completed: {todo.completed ? "yes" : "No"}</p>
            <p className='border-t border-black mt-5 text-right'>
                By User: {todo.userId}
            </p>
        </div>
    )
}

// fetch got upgraded so that it can replace getServerSideProps() and getStaticProps() with the use of cache and revalidate
const fetchTodo = async (todoId : string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache: 'force-cache'}, /*{next: {revalidate: 60}}*/)
    const todo:Todo = await res.json()
    return todo
}

export default TodoPage

// similar to getStaticPath() in Nextjs 12.
// It provides the slugs so that the client knows what page to prerender
// use with no-cache or revalidate (same to getStaticProps with or without revalidation)
export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json()


    return todos.map(todo => ({
        todoId: todo.id.toString()
    })) 
}