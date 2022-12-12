<script setup>
// import "../../assets/spiner.css";
import "./Spiner.scss";
</script>
<template>
  <div v-on:mouseout="test" class="spiner">
    <svg viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <path
          id="circle"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text>
        <textPath xlink:href="#circle">showreel showreel showreel</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // коряво но работаяет нужно от обработчиков избавится
    test() {
      const spiner = document.querySelector(".spiner");
      const spinerSvg = document.querySelector(".spiner svg");
      // console.log(spinerSvg);
      spiner.addEventListener("mouseover", () => {
        spinerSvg.style.setProperty("animation", "spin 5s infinite linear");
      });

      spiner.addEventListener("mouseout", () => {
        spinerSvg.style.setProperty(
          "animation",
          "spin 5s infinite linear paused"
        );
      });
    },
  },
};
</script>
