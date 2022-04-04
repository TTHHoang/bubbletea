<template>
<div id='main-products' class="row py-5 my-5">
  <div class="col-12">
    <h2>Menu</h2>
  </div>
  <div class="col-md-4 mb-4" v-for="item in gallery">
    <router-link :to="{path:item.link}">
      <a class="product">
      <img class="" :src="require(`../img/${item.img}.png`)">
      <span class="">{{item.title}}</span>
    </a>
    </router-link>
  </div>
  <div class="col-12">
    <router-link to="/products" class="btn mt-5"> See all drinks </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  components: {},

  data() {
    return {
      gallery: [{
          title: 'Matcha',
          link: '/products',
          img: "gong-cha"
        },
        {
          title: 'Milk tea',
          link: '/products',
          img: "gong-cha"
        },
        {
          title: 'Lychee',
          link: '/products',
          img: "gong-cha"
        }
      ],
      counter: 0,
      itemsAvailable: 0
    }
  },
}
</script>
