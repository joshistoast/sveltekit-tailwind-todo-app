<script>
  import TodoList from '../components/TodoList.svelte'
  import TodoForm from '../components/TodoForm.svelte'
  import { todos } from '../stores/todos'
</script>

<main>
  <div class="sticky top-0 bg-white pt-6 px-6">
    <h1 class="text-2xl font-bold md:text-3xl">Todo App</h1>
    <TodoForm />
  </div>
  {#if $todos.length}
    <TodoList />
  {/if}
</main>
