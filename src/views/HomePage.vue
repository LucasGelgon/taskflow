<template>
  <div class="home">
    <TaskForm @task-added="addTask"></TaskForm>
    <TaskList :tasks="filteredTasks" @delete-task="deleteTask"></TaskList>
    <div class="filters">
      <button @click="filterTasks('all')">Toutes les tâches</button>
      <button @click="filterTasks('à faire')">À faire</button>
      <button @click="filterTasks('en cours')">En cours</button>
      <button @click="filterTasks('terminé')">Terminé</button>
      <button @click="filterTasks('haute')">Haute priorité</button>
      <button @click="filterTasks('moyenne')">Moyenne priorité</button>
      <button @click="filterTasks('basse')">Basse priorité</button>
    </div>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: { TaskForm, TaskList },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      filter: 'all',
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks;
      }
      return this.tasks.filter(task => task.state === this.filter || task.priority === this.filter);
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    },
    deleteTask(taskToDelete) {
      this.tasks = this.tasks.filter(task => task !== taskToDelete);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    filterTasks(criteria) {
      this.filter = criteria;
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.filters button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
