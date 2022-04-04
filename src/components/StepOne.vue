<template>
  <div class="stepOne col-12">
    <div class="row">
      <div class="choosingTitle col-12">Tea menu</div>
      <div v-for="flavor in flavors" class="col-md-6">
        <input
          type="radio"
          :id="flavor.replace(' ', '-').toLowerCase()"
          class="choosingDrinkRadio"
          @change="stepOneUpdate($event.target.value)"
          :value="flavor"
          :name="name"
        />
        <label
          :for="flavor.replace(' ', '-').toLowerCase()"
          class="choosingDrinkButton"
          >{{ flavor }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  props: ["chosenDrink", "flavors", "name"],
  data() {
    return {
      // newChosen: this.chosenDrink,
    };
  },
  methods: {
    stepOneUpdate(newData) {
      this.$emit("update", newData);

      if (document.getElementById("error")) {
        this.$parent.deleteError();
      }
    },
  },
};
</script>
