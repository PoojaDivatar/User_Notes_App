<template>
  <form @submit="onSubmit" class="add-form">
    <div class="add-notes-container">
      <label>Note</label>
      <input type="text" v-model="task" name="text" placeholder="Add Note" />
    </div>
    <div class="add-notes-container">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="time"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>

    <input type="submit" value="Save Note" class="btn save-btn" />
  </form>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      task: "",
      time: "",
    };
  },
  methods: {
    /*submit form*/
    onSubmit(e) {
      e.preventDefault();
      if (!this.task) {
        alert("Please add a note");
        return;
      }
      const newNote = {
        id: Math.floor(Math.random() * 100000),
        task: this.task,
        time: this.time,
      };
      this.$emit("addNote", newNote);
      this.task = "";
      this.time = "";
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.add-notes-container {
  margin: 20px 0;
}

.add-notes-container input {
  width: 100%;
  height: 34px;
  padding: 3px 7px;
  font-size: 14px;
}
.add-notes-container label {
  text-align: justify;
  font-size: 14px;
  display: block;
}
.save-btn {
  color: white;
  background: blue;
}
</style>