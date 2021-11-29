<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="login-panel bg-white text-left">
          <h1 class="display-3 font-weight-bold">Login</h1>

          <br />
          <span v-if="isError" class="incorrect">
            Email Address/ Password is incorrect!!</span
          >
          <br />
          <div class="form-group">
            <lable class="input-label">Email Address</lable>
            <input
              type="email"
              v-model="emailVal"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <lable class="input-label">Password</lable>
            <input
              type="password"
              class="form-control"
              v-model="passwordVal"
              placeholder="Password"
            />
          </div>
          <br />
          <div class="form-group d-flex justify-content-center">
            <button
              class="btn btn-primary w-25"
              id="login"
              @click="loginToNotes"
              :disabled="emailVal === '' || passwordVal === ''"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isLoggingIn: false,
      emailVal: "",
      passwordVal: "",
      isError: false,
    };
  },
  methods: {
    /* Login to user notes */
    loginToNotes() {
      if (this.emailVal === "user1@test.com" && this.passwordVal === "encora") {
        this.isError = false;
        this.$router.push({ name: "notes" });
      } else {
        this.isError = true;
      }
    },
  },
};
</script>

<style  scoped>
.widget {
  margin: 0;
  height: unset;
}
.login-panel {
  position: relative;
  padding: 4em 2em;
  border: 1px solid #9fa3d4;
}
.input-label {
  font-weight: 600;
  font-size: 14px;
}
.incorrect {
  color: red;
  font-size: 14px;
}
.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: grey;
  border-color: grey;
  cursor: not-allowed;
}
</style>