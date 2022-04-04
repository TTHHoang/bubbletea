<template>
  <div class="stepTwo col-12">
    <div class="row">
      <div class="choosingTitle col-12">Toppings</div>
      <div v-for="topping in toppings" class="col-md-6">
        <input
          type="radio"
          :id="topping"
          :value="topping"
          @change="stepTwoUpdate($event.target.value)"
          :name="name"
        />
        <label :for="topping" class="choosingToppingButton"
          >{{ topping }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  props: ["toppings", "chosenTopping", "name"],
  data() {
    return {
      // newChosen: this.chosenTopping,
    };
  },
  methods: {
    stepTwoUpdate(newData) {
      this.$emit("update", newData);

      if (document.getElementById("error")) {
        this.$parent.deleteError();
      }

       if (newData.toLowerCase() == 'tapioca') {
        this.createBalls();
      }
    },

    createBalls(){
    let drink = document.getElementById('tapioca');
    // let drinkY = parseInt(drink.getBoundingClientRect().top + window.scrollY);
    // let drinkX = parseInt(drink.getBoundingClientRect().left + window.scrollX);
    // console.log(drinkY);
    // console.log(drinkX);
    let ball = document.createElement('div');
    ball.classList.add = 'tapiocaBall';

    //create balls + randomize


  }
  },
};
</script>
