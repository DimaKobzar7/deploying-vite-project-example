<!-- <script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import TestTryVue from "./components/TestTry.vue";
// import TheGeneral from "./components/General/TheGeneral.vue";
// const langIco = document.querySelector(".header__language");
// console.log(langIco);
</script> -->

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <TheGeneral /> -->
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <!-- там где находится RouterView там и будет отображатся компонет который нажаты по ссылке-->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="in-out">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <RouterView />
</template>

<style>
.route-enter-from {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(1000px); */
  transform: translateX(100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  transition: all 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-enter-to {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(1000px); */
  transform: translateX(100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  transition: all 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-enter-active {
  /* opacity: 0; */
  /* opacity: 1; */
  transform: translateX(100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  transition: all 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-from {
  /* opacity: 1; */
  /* opacity: 0; */
  /* transform: translateX(1000px); */
  transform: translateX(-100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  transition: all 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* transition: all 2s ease-in; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-to {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(-100px); */
  transform: translateX(-100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  transition: all 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-active {
  /* opacity: 0; */
  /* opacity: 1; */
  transform: translateX(-100%) rotate(360deg);
  /* transition: transform 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  transition: all 0.3s ease-in;
  /* background-color: red; */
  /* color: red; */
}
</style>

<!--
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
