<template>
  <div class="stepFour col-12">
    <div class="row">
      <div class="choosingTitle col-12">Ice level</div>
      <div class="col-12">
        <div class="bar mt-3">
          <progress id="levelBarIce" :value="chosenIceLevel" max="100">
          </progress>
        </div>
        <div class="levelRadioSliderIce">
          <div v-for="iceLevel in iceLevels" class="radioIce">
            <input
              type="radio"
              :value="iceLevel"
              :id="iceLevel+'-ice'"
              @change="stepFourUpdate($event.target.value)"
              :name="name"
            />
            <label :for="iceLevel+'-ice'" class="">{{ iceLevel }}%</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepFour",
  props: ["iceLevels", "chosenIceLevel", "name"],
  data() {
    return {
      // newChosen: this.chosenIceLevel,
    };
  },
  methods: {
    stepFourUpdate(newData) {
      this.$emit("update", newData);
    },
  },
};
</script>
