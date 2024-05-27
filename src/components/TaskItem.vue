<template>
  <div class="task-item">
    <h3>{{ task.description }}</h3>
    <p>Date de début: {{ task.startDate }}</p>
    <p>Date de fin: {{ task.endDate }}</p>
    <p>État: {{ task.state }}</p>
    <p>Priorité: {{ task.priority }}</p>
    <button @click="$emit('delete-task', task)" class="btn btn-danger">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
};
</script>

<style scoped>
.task-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
