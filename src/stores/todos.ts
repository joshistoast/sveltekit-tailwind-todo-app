import { writable } from 'svelte/store'
import type { Todo } from '../types'

export const todos = writable<Todo[]>([])

export const addTodo = (todo: string) => {
  todos.update((oldTodos: Todo[]) => {
    const newTodos = [
      ...oldTodos,
      {
        text: todo,
        completed: false,
        id: Date.now().toString()
      }
    ]
    return newTodos
  })
}

export const deleteTodo = (id: string) => {
  // upon window alert confirm, delete the todo
  if (window.confirm('Are you sure you want to delete this todo?')) {
    todos.update((todos: Todo[]) => todos.filter(todo => todo.id !== id))
  }
}

export const toggleTodoCompleted = (id: string) => {
  todos.update((todos: Todo[]) => {
    const todo = todos.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
    return todos
  })
}
