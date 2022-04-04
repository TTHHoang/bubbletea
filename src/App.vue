<template>
      <div id="app">
        <div id="menu-container" class="container-fluid sticky-top">
          <MenuBar />
        </div>
        <router-view></router-view>
        <div class="container-fluid footer"><FooterEnd /></div>
      </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import Banner from "@/components/BannerHome.vue";
import Story from "@/components/Story.vue";
import ContactUs from "@/components/ContactUs.vue";
import Products from "@/components/Products.vue";
import FooterEnd from "@/components/FooterEnd.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "app",
  components: {
    MenuBar,
    Story,
    ContactUs,
    Banner,
    Products,
    FooterEnd,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    document.title = "Home";
  },
};
</script>
