<template>
  <div id="menuBar">
    <div class="container">
      <ul class="desktop-menu">
        <li v-for="item in menuBar">
          <router-link :to="{ path: item.link }" exact
            >{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mobile-menu" v-bind:class="{ active: mobileMenu }">
      <div class="container">
        <ul>
          <li v-for="item in menuBar" class="mb-5">
            <router-link :to="{ path: item.link }" exact
              >{{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div
        @click="mobileMenu = !mobileMenu"
        style="font-size: 4rem"
        class="hamburger"
      >
        <b-icon icon="list"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data: function () {
    return {
      menuBar: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About us",
          link: "/about",
        },
        {
          name: "Products",
          link: "/products",
        },
        {
          name: "Customize",
          link: "/customize",
        },

        {
          name: "Contact",
          link: "/contact",
        },
      ],
      mobileMenu: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      let menu;
      let banner;
      let menuItem;

      menu = document.getElementById("menu-container");
      banner = document.getElementsByClassName("banner")[0];
      menuItem = menu.querySelectorAll("ul li a");

      window.onscroll = function () {
        for (var i = 0; i < menuItem.length; i++) {

          if (window.scrollY > 50) {
            menuItem[i].style.color = "";
            menu.style.background = "#ffffffd6";
            menu.style.boxShadow = "gray 9px 0px 13px -6px";
          } else {
            menuItem[i].style.color = "";
            menu.style.background = "";
            menu.style.boxShadow = "";
          }
        }
      };
    },
  },
};
</script>
