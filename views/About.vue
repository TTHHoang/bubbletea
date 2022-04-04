<template>
    <div>
        <div class=" banner about">
          <Banner title="About" />
        </div>
        <AboutUsContent />
        <ContactUs />

    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import AboutUsContent from '@/components/AboutUsContent.vue'
import ContactUs from '@/components/ContactUs.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'About',
    components: {
        Banner,
        AboutUsContent,
        ContactUs,
    },

    mounted(){
        window.scrollTo(0, 0);

        const boxes = gsap.utils.toArray('.anim');

        boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
        ScrollTrigger.create({
            trigger: box,
            animation: anim,
            // toggleActions: 'restart pause resume pause',
            once: false,
        });
        });
    },
     created(){
        document.title = "About us"    
    }
}
</script>
