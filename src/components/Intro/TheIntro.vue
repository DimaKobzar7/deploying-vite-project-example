<!-- <script setup>
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
import { ref } from "vue";
// import RunningText from "../RunningText/TheRunningText.Vue";
// import RunningText from "../Running/TheRunningText.Vue";
import RunningText from "../RunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
// import "../../assets/intro.css";
import "./Intro.scss";
// import TheError404 from "../Error404/TheError404.vue";
console.log("main");
// const langIco = document.querySelector(".header__language");

// console.log(langIco);
</script> -->

<!-- <RouterLink to="/">Home</RouterLink>
<RouterLink to="/about">About</RouterLink> -->
<template>
  <div class="intro">
    <!-- <transition name="fade">
      <div v-if="showP">gfhfgjh</div>
    </transition>
    <button @click="showP = !showP">toggle</button> -->
    <TheHeader />
    <div class="intro__front">
      <h1 class="intro__title">
        FULL-CYCLE <br />
        EVENT AGENCY
      </h1>
      <div class="intro__img">
        <img src="../../images/img/EllipseClear.png" alt="Ellipse" />
        <TheSpiner />
      </div>
    </div>
    <RunningText />
    <RouterLink
      to="/where"
      class="intro__horizontal-link intro__horizontal-link--left"
    >
      Where?
    </RouterLink>
    <RouterLink
      to="/what"
      class="intro__horizontal-link intro__horizontal-link--right"
    >
      What?
    </RouterLink>
    <RouterLink to="/who" class="intro__vertical-link">Who?</RouterLink>
    <!-- <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" /> -->
    <!-- <RouterView /> -->
    <!-- <transition name="slide-fade">
      <router-view></router-view>
    </transition> -->
    <!-- <router-view v-slot="{ TheHeader }">
      <transition>
        <component :is="TheHeader" />
      </transition>
    </router-view> -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view> -->
    <!-- <RouterView /> -->
  </div>
</template>

<script>
// import { ref } from "vue";
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
// import RunningText from "../RunningText.vue";
import RunningText from "../RunningText/TheRunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
import "../../assets/intro.css";
import "./Intro.scss";

export default {
  components: { TheHeader, RunningText, TheSpiner, RouterLink },
  // setup() {
  //   const showP = ref(true);
  //   // console.log(showP);

  //   return { showP };
  // },
};
</script>

<!-- <style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style> -->
