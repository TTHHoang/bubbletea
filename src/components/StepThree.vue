<template>
  <div class="stepThree col-12">
    <div class="row">
      <div class="choosingTitle col-12">Sugar level</div>
      <div class="col-12">
        <div class="bar mt-3">
          <progress id="levelBar" :value="chosenSugarLevel" max="100">
          </progress>
        </div>
        <div class="levelRadioSlider">
          <div v-for="sugarLevel in sugarLevels" class="radio">
            <input
              type="radio"
              :value="sugarLevel"
              :id="sugarLevel"
              @change="stepThreeUpdate($event.target.value)"
              :name="name"
            />
            <label :for="sugarLevel" class="">{{ sugarLevel }}%</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepThree",
  props: ["sugarLevels", "chosenSugarLevel", "name"],
  data() {
    return {
      // newChosen: this.chosenSugarLevel,
    };
  },

  methods: {
    stepThreeUpdate(newData) {
      this.$emit("update", newData);
    },
  },
};
</script>
