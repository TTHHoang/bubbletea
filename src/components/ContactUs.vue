<template>
<div class="row">
  <div class=" contact-block col-12 p-md-5 justify-content-center align-items-center d-flex flex-column">
    <div class="row justify-content-center text-center p-md-5">
      <div class="col-md-8 col-12">
        <h2>{{title}}</h2>
        <p>{{intro}}</p>
        <router-link to="/contact" class="btn mt-4">Contact us </router-link>
      </div>
    </div>

  </div>
</div>

</template>

<script>
export default {
  name: 'ContactUs',
  components: {},

  data() {
    return {
      title: "Want to know more?",
      intro: "Quisque viverra est quis purus porta dignissim. Ut tincidunt lorem vel vehicula aliquam. Maecenas quis elementum eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur velit lacus, venenatis non purus vel. Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec velit nec accumsan. "
    }
  },
  methods: {},

  computed: {},
}
</script>
