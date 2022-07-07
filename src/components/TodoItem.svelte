<script lang="ts">
  import { deleteTodo, toggleTodoCompleted } from '../stores/todos'
  import Icon from '@iconify/svelte'
  import type { Todo } from '../types'

  export let todo: Todo
</script>

<div
  class="flex flex-col p-4 md:flex-row md:justify-between space-y-4 md:space-y-0 md:items-center rounded-xl border {todo.completed
    ? 'bg-gray-100 border-transparent'
    : 'bg-transparent border-gray-200'}">
  <div class="flex items-center space-x-3">
    <div
      class="rounded-full p-2 text-gray-900 cursor-pointer bg-transparent {todo.completed
        ? 'hover:bg-gray-300'
        : 'hover:bg-gray-200'}"
      on:click={() => toggleTodoCompleted(todo.id)}>
      <Icon
        icon={todo.completed
          ? 'fluent:checkbox-checked-16-filled'
          : 'fluent:checkbox-unchecked-16-filled'}
        class="w-6 h-6" />
    </div>
    <div class={todo.completed ? 'line-through text-gray-500' : ''}>
      <h2 class="text-lg font-semibold">
        {todo.text}
      </h2>
      <p class="text-xs text-gray-400">#{todo.id}</p>
    </div>
  </div>
  <div
    class="bg-gray-100 text-gray-900 rounded-full self-end p-2 cursor-pointer hover:bg-gray-900 hover:text-gray-100"
    on:click={() => deleteTodo(todo.id)}>
    <Icon icon="fluent:delete-16-regular" class="w-6 h-6" />
  </div>
</div>
