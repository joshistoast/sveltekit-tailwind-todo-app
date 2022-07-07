<script>
  import { addTodo, todos } from '../stores/todos'
  import Icon from '@iconify/svelte'

  let todo = ''

  const submitTodo = () => {
    addTodo(todo)
    todo = ''
  }
</script>

<form
  on:submit|preventDefault={submitTodo}
  class="flex items-center space-x-4 py-6 {$todos.length ? 'border-b border-gray-200' : ''}">
  <input
    class="rounded-full appearance-none px-4 py-2 placeholder-gray-500 border border-gray-200 w-full hover:bg-gray-200 focus:outline-2 focus:shadow-lg focus:outline-gray-900"
    type="text"
    placeholder="Remember to..."
    name="todo"
    bind:value={todo} />
  <button
    type="submit"
    disabled={!todo}
    class="bg-gray-900 disabled:bg-gray-200 disabled:text-gray-500 font-bold flex items-center shrink-0 text-gray-100 rounded-full p-2 hover:bg-gray-700">
    <span class="px-3">Add</span>
    <Icon icon="fluent:add-16-filled" class="w-6 h-6" />
  </button>
</form>
