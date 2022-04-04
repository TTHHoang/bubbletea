<template>
<div>

    <Bub :class="[chosenDrink.replace(' ', '-').toLowerCase(), chosenTopping.replace(' ', '-').toLowerCase()]" class="svgBubbletea"/>

</div>
</template>

<script>
import Bub from '@/img/bubbleimage.svg?inline';

export default {
  name: "BubbleteaSvg",
  props: ["chosenDrink", "chosenTopping"],
  components:{
    Bub 
  }
};
</script>

<style scoped>



</style>
