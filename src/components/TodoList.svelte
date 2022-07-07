<script>
  import { todos } from '../stores/todos'
  import TodoItem from './TodoItem.svelte'
</script>

<div class="py-6 px-6 grid gap-3">
  {#each $todos as todo}
    <TodoItem {todo} />
  {/each}
</div>
