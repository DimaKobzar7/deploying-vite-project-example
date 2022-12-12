<script setup>
import "../Error/Error.scss";
import { RouterLink } from "vue-router";

console.log("error");
</script>

<template>
  <main>
    <section>
      <div class="error-message">
        <RouterLink to="/">Click here</RouterLink>
      </div>
    </section>
  </main>
</template>
