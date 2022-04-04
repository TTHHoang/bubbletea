<template>
    <div class="container form py-5">
      <form>
        <div class="form-group">
          <label for="name">Name* </label>
          <input type="text" id="name"  class="form-control" required placeholder="name*">
          <label for="email">Email* </label>
          <input type="email" id="email"  class="form-control" required placeholder="email*">
          <label for="message">Message* </label>
          <textarea id="message"  class="form-control" required placeholder="message*" rows="4" cols="50"></textarea>
          <button type="submit" class="btn btn-primary mt-5">Submit</button>
        </div>
      </form>
  </div>
</template>

<script>


export default {
  name: 'app',
  components:{
  },

  data(){
      return {
      }
  },
}

</script>
