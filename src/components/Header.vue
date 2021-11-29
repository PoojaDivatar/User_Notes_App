<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      :text="showAddBtn ? 'Close' : 'Add Note'"
      @btn-click="$emit('toggleAddBtn')"
      :color="showAddBtn ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    title: String,
    showAddBtn: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>