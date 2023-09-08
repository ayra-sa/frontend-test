<template>
  <section
    class="w-full min-h-screen flex flex-col place-content-center items-center relative"
  >
    <img
      src="../assets/bg-login.jpg"
      alt="background"
      class="absolute w-auto h-full -z-10"
    />
    <div
      class="border border-neutral-200 rounded-xl p-10 w-4/5 md:w-2/4 lg:w-1/4 shadow-xl bg-white bg-opacity-80"
    >
      <h2 class="text-3xl font-bold mb-10">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3 flex flex-col items-start gap-y-1">
          <label for="username" class="label">Username</label>
          <input
            type="text"
            id="username"
            v-model="input.username"
            required
            class="input"
          />
        </div>
        <div class="mb-3 flex flex-col items-start gap-y-1">
          <label for="username" class="label">Password</label>
          <input
            type="password"
            id="password"
            v-model="input.password"
            required
            class="input"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 h-10 w-3/5 mx-auto flex justify-center items-center text-white font-semibold text-base rounded-3xl mt-10 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors duration-200 hover:bg-blue-700"
          :disabled="isDisabled"
        >
          <template v-if="loading">
            <Loader />
          </template>
          <template v-else>
            Login
          </template>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import Loader from './Loader.vue';
import {SET_AUTHENTICATION, SET_USERNAME} from "../store/storeconstants"

export default {
  name: "Login",
  components: {
    Loader,
  },
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  computed: {
    isDisabled() {
      return !(this.input.username && this.input.password);
    },
  },
  methods: {
    login() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        if (this.input.username != "" || this.input.password != "") {
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, true)
          this.$store.commit(`auth/${SET_USERNAME}`, this.input.username)
          this.$router.push("/user");
        } else {
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, false)
          alert("Login failed. Check again your username and password.");
        }
      }, 2000);
    },
  },
};
</script>
