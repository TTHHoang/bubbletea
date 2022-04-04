<template>
  <div class="row">
    <div class="col-12"><h1 class="newsHeading">News</h1></div>
    <div id="newsItems" class="col-12">
      <div class="row">
        <!-- for loop -->
        <div v-for="item in news" class="col-md-4">
          <a :href="`${item.link}`">
            <div class="newsBlock">
              <span class="newsTitle">{{ item.title }}</span>
              <img class="newsImg" :src="require(`../img/${item.img}.jpg`)" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  components: {},

  data() {
    return {
      news: [
        {
          title: "About us",
          link: "#gg",
          img: "event",
        },
        {
          title: "News",
          link: "#",
          img: "2",
        },
        {
          title: "Products",
          link: "#",
          img: "event",
        },
        {
          title: "Locations",
          link: "#",
          img: "event",
        },
        {
          title: "jimmy",
          link: "#",
          img: "event",
        },
        {
          title: "james",
          link: "#",
          img: "event",
        },
      ],
    };
  },

};
</script>
