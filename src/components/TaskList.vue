<template>
  <div class="task-list">
    <div v-for="task in tasks" :key="task.description">
      <TaskItem :task="task" @delete-task="deleteTask"></TaskItem>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  props: ['tasks'],
  methods: {
    deleteTask(task) {
      this.$emit('delete-task', task);
    }
  }
};
</script>

<style scoped>
.task-list {
  max-width: 800px;
  margin: auto;
}
</style>
