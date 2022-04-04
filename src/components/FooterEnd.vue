<template>
  <div class="container py-5 text-white">
    <div class="row py-5">
      <div class="col-md-4">
        <b>Company name</b><br>
        VueJS 26<br>
        Silicon Valley<br>
        1234 AB<br>
        +31 61234567<br>
        example@email.com<br>
      </div>
      <div class="col-md-4">
        <ul class="footer-link">
            <li><b>Explore</b></li>
            <li v-for="item in menuBar"><router-link :to="{path:item.link}" exact>{{ item.name }} </router-link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <b>Follow us on</b><br>
        <b-icon icon="facebook"></b-icon> &nbsp;
        <b-icon icon="instagram"></b-icon> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerEnd',
      data: function ()  {
      return {
        menuBar: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About us',
                link: '/about'
            },
            {
                name: 'Products',
                link: '/products'
            },

            {
                name: 'Contact',
                link: '/contact'
            }
        ],
        mobileMenu : false
      }
    }
  }

</script>
