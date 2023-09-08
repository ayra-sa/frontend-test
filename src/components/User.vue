<template>
  <section class="min-h-screen flex flex-col place-content-center items-center">
    <div class="w-3/5">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl mb-5 tracking-wider font-bold">Welcome, {{ getUsername() }}</h1>

        <button class="font-semibold text-base transition duration-300 hover:underline" @click="logout">
          Logout
        </button>
      </div>

      <div class="space-y-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          maiores qui vitae. Qui iure asperiores obcaecati possimus repellat a
          veniam sint vitae odio praesentium! Labore minus maxime sed quia
          blanditiis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          obcaecati.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magnam
          fugit quaerat molestias fuga fugiat voluptatem? Numquam, eaque
          aliquam.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { GET_USERNAME, SET_AUTHENTICATION } from "../store/storeconstants";

export default {
  name: "User",
  methods: {
    getUsername() {
      return this.$store.getters[`auth/${GET_USERNAME}`];
    },
    logout() {
      this.$store.commit(`auth/${SET_AUTHENTICATION}`, false)
      alert("Logout success")
      this.$router.push("/");
    }
  },
};
</script>
