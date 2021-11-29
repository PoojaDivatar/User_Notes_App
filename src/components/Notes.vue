<template>
  <div class="notes">
    <Header
      title="Task Tracker"
      @toggleAddBtn="toggleAddBtn"
      :showAddBtn="showAddBtn"
    />
    <div v-show="showAddBtn">
      <AddNotes @addNote="addNote" />
    </div>
    <UserNotes
      :notesData="notesData"
      @deleteNotes="deleteNotes"
      @editSave="editSave"
    />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import UserNotes from "./UserNotes";
import AddNotes from "./AddNote";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    UserNotes,
    AddNotes,
  },
  data() {
    return {
      notesData: [],
      showAddBtn: false,
    };
  },
  /*ligecycle hook */
  created() {
    this.notesData = [
      {
        id: "1",
        task: "Doctors appointment",
        time: "Nov 11th at 2:30pm",
      },
      {
        id: "2",
        task: "Meeting",
        time: "Nov 11th at 4pm",
      },
      {
        id: "3",
        task: "Shopping",
        time: "Nov 11th at 5pm",
      },
    ];
  },
  methods: {
    /*delete notes from the list*/
    deleteNotes(id) {
      if (confirm("Are you sure?")) {
        this.notesData = this.notesData.filter((val) => val.id !== id);
      }
    },
    /*add new note to the list*/
    addNote(note) {
      this.notesData = [...this.notesData, note];
    },
    /*when add note button is click, button label is changed to close and vice verse*/
    toggleAddBtn() {
      this.showAddBtn = !this.showAddBtn;
    },
    /*edit note and save editted data*/
    editSave(id, newData, newTime) {
      for (let i = 0; i <= this.notesData.length; i++) {
        if (this.notesData[i].id === id) {
          this.notesData[i].task = newData;
          this.notesData[i].time = newTime;
        }
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.notes {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>