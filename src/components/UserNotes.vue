<template>
  <div>
    <div :key="note.id" v-for="note in notesData">
      <div class="notes-cls">
        <div class="task">
          <span>{{ note.task }}</span>
          <span>{{ note.time }}</span>
        </div>
        <div>
          <i class="fas fa-edit edit" @click="editNotes(note.id)"></i>
          <i class="fas fa-trash" @click="deleteNotes(note.id)"></i>
        </div>
      </div>
    </div>

    <v-row justify="center" data-app>
      <v-dialog v-model="openDialog" persistent width="500">
        <v-card>
          <v-card-title class="text-h5"> Edit Note </v-card-title>

          <div class="edit-note">
            <label>Note</label>
            <input
              type="text"
              v-model="edittedTask"
              name="text"
              placeholder="Edit Note"
            />
          </div>
          <div class="edit-note">
            <label>Day and Time</label>
            <input
              type="text"
              v-model="edittedTime"
              name="text"
              placeholder="Edit day and time"
            />
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="openDialog = false">
              Cancel
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="saveEditedTask"
              :disabled="edittedTask === '' || edittedTime === ''"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserNotes",
  props: {
    notesData: Array,
  },
  data() {
    return {
      openDialog: false,
      edittedTask: "",
      edittedId: "",
      edittedTime: "",
    };
  },

  methods: {
    /*emit to parent delete notes from the list*/
    deleteNotes(id) {
      this.$emit("deleteNotes", id);
    },
    /*edit note*/
    editNotes(id) {
      this.openDialog = true;
      this.edittedId = id;
    },
    /*emit to parent edit note and save editted data*/
    saveEditedTask() {
      this.$emit(
        "editSave",
        this.edittedId,
        this.edittedTask,
        this.edittedTime
      );
      this.openDialog = false;
      this.edittedId = "";
      this.edittedTask = "";
      this.edittedTime = "";
    },
  },
};
</script>
<style scoped>
.notes-cls {
  background: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 16px;
}
.notes-cls .task {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.notes-cls span:nth-child(2) {
  font-size: 12px;
}
.notes-cls .edit {
  padding-right: 12px;
}
.edit-note {
  padding: 16px;
}
input {
  border: 1px solid #625252;
}
.edit-note input {
  width: 100%;
  height: 34px;
  padding: 3px 7px;
  font-size: 14px;
}
.edit-note label {
  text-align: justify;
  font-size: 14px;
  display: block;
}
</style>