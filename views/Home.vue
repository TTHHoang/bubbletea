<template>
    <div>
        <div class=" banner" :class="[home]">
          <Banner />
        </div>

        <div class="container anim">
          <Story />
          <Products />
        </div>

        <div class="container-fluid anim">
          <ContactUs />
        </div>
        <div class="container anim">
        </div>
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import Banner from '@/components/BannerHome.vue'
import Story from '@/components/Story.vue'
import ContactUs from '@/components/ContactUs.vue'
import Products from '@/components/Products.vue'
import FooterEnd from '@/components/FooterEnd.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Home',
    components: {
        MenuBar,
        Story,
        ContactUs,
        Banner,
        Products,
        FooterEnd
    },
    data(){
      return{
        home:'home-banner'
      }
    },
     mounted(){
        window.scrollTo(0, 0);

        const boxes = gsap.utils.toArray('.anim');

        boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
        ScrollTrigger.create({
            trigger: box,
            animation: anim,
            toggleActions: 'restart pause resume pause',
            once: false,
        });
        });
    }
}
</script>
