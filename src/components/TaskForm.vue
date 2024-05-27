<template>
  <div class="task-form">
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text" v-model="description" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="startDate">Date de début:</label>
        <input type="date" v-model="startDate" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="endDate">Date de fin:</label>
        <input type="date" v-model="endDate" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="state">État:</label>
        <select v-model="state" class="form-control" required>
          <option value="à faire">À faire</option>
          <option value="en cours">En cours</option>
          <option value="terminé">Terminé</option>
        </select>
      </div>
      <div class="form-group">
        <label for="priority">Priorité:</label>
        <select v-model="priority" class="form-control" required>
          <option value="haute">Haute</option>
          <option value="moyenne">Moyenne</option>
          <option value="basse">Basse</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Ajouter Tâche</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      startDate: '',
      endDate: '',
      state: 'à faire',
      priority: 'moyenne',
    };
  },
  methods: {
    addTask() {
      const task = {
        description: this.description,
        startDate: this.startDate,
        endDate: this.endDate,
        state: this.state,
        priority: this.priority,
      };
      this.$emit('task-added', task);
      this.description = '';
      this.startDate = '';
      this.endDate = '';
      this.state = 'à faire';
      this.priority = 'moyenne';
    }
  }
};
</script>

<style scoped>
.task-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
