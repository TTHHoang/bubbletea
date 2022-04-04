<template>
  <div>
    <div class="banner customize">
      <Banner title="Customize " />
    </div>
    <div class="bubbletea"></div>
    <div class="container p-5">
      <div class="row">
        <div class="col-md-5 bubbletea-config-image">
          <BubbleteaSvg
            :chosenDrink="chosenDrink"
            :chosenTopping="chosenTopping"
          />
        </div>
        <div class="col-md-7 rightSideConfig">
          <div class="row configurator">
            <div class="col-12">
              <p class="mt-3 mt-md-0">
                Mauris sodales lacus in mi facilisis aliquam. Duis ultrices nec
                velit nec accumsan. Praesent condimentum odio nec enim euismod
                accumsan. Quisque viverra est quis purus porta dignissim. Ut
                tincidunt lorem vel vehicula aliquam. Maecenas quis elementum
                eros. Donec quis eros quis tellus porttitor hendrerit. Curabitur
                velit lacus, venenatis non purus vel.
              </p>
              <div class="chosen p-4" v-show="chosenDrink">
                <h3>Chosen options</h3>
                <span v-show="chosenDrink">{{ chosenDrink }} drink <br></span>
                <span v-show="chosenTopping">{{ chosenTopping }} topping<br></span
                >
                <span v-show="chosenSugarLevel"
                  >{{ chosenSugarLevel }}% sugar level<br></span
                >
                <span v-show="chosenIceLevel"
                  >{{ chosenIceLevel }}% ice level<br></span
                >
              </div>
              <div class="mt-5 stepCount">STEP {{ step }}</div>
            </div>

            <!-- Drink component -->
            <StepOne
              v-show="step == 1"
              @update="updateChosen"
              v-model="chosenDrink"
              :chosenDrink="chosenDrink"
              :flavors="flavors"
              :name="nameDrink"
            ></StepOne>

            <!-- Topping component -->
            <StepTwo
              v-show="step == 2"
              :toppings="toppings"
              @update="updateToppings"
              :chosenTopping="chosenTopping"
              v-model="chosenTopping"
              :name="nameTopping"
            ></StepTwo>
            <!-- Ice level component -->
            <StepThree
              v-show="step == 3"
              :sugarLevels="sugarLevels"
              @update="updateSugarLevel"
              :chosenSugarLevel="chosenSugarLevel"
              v-model="chosenSugarLevel"
              :name="nameSugar"
            ></StepThree>
            <StepFour
              v-show="step == 4"
              :iceLevels="iceLevels"
              @update="updateIceLevel"
              :chosenIceLevel="chosenIceLevel"
              v-model="chosenIceLevel"
              :name="nameIce"
            ></StepFour>
            <div class="col-12 mt-5 d-flex controlButtons justify-content-end">
              <button
                v-show="step > 1 && step <= 5"
                class="btn nextButton mr-auto"
                @click="previousStep()"
              >
                Previous
              </button>
              <button
                v-show="step >= 1 && step < 4"
                class="btn"
                @click="nextStep()"
              >
                Next 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import StepOne from "@/components/StepOne.vue";
import StepTwo from "@/components/StepTwo.vue";
import StepThree from "@/components/StepThree.vue";
import StepFour from "@/components/StepFour.vue";
import BubbleteaSvg from "@/components/BubbleteaSvg.vue";

let error;

export default {
  name: "customize",
  data() {
    return {
      nameDrink: "Drink",
      nameTopping: "Topping",
      nameSugar: "Sugar",
      nameIce: "Ice",
      step: 1,
      flavors: ["Milk tea", "Matcha", "Honeydew", "Lychee"],
      toppings: ["Tapioca", "Red bean", "Jelly", "Fruit pearls"],
      sugarLevels: ["0", "20", "40", "60", "80", "100"],
      iceLevels: ["0", "20", "40", "60", "80", "100"],
      chosenDrink: "",
      chosenTopping: "",
      chosenSugarLevel: "",
      chosenIceLevel: "",
      errorText: "Please select one of the options",
    };
  },
  components: {
    Banner,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    BubbleteaSvg,
  },
  methods: {
    nextStep() {
      if (this.step == 1 && this.chosenDrink != "") {
        this.step += 1;
        this.deleteError();
      } else if (this.step == 2 && this.chosenTopping != "") {
        this.step += 1;
        this.deleteError();
      } else if (this.step == 3 && this.chosenSugarLevel != "") {
        this.step += 1;
        this.deleteError();
      } else if (this.step == 4 && this.chosenIceLevel != "") {
        this.deleteError();
      } else {
        if (!document.getElementById("error")) {
          this.createError();
        }
      }
    },
    createError() {
      error = document.createElement("div");
      error.id = "error";
      let controlButtons = document.getElementsByClassName("controlButtons")[0];
      error.classList.add("col-12");
      error.innerHTML = this.errorText;
      document
        .getElementsByClassName("configurator")[0]
        .insertBefore(error, controlButtons);
    },
    deleteError() {
      if (document.getElementById("error")) {
        document.getElementById("error").remove();
      }
    },
    previousStep() {
      if (this.step >= 1) {
        this.step -= 1;
      }
    },
    updateChosen(newData) {
      this.chosenDrink = newData;
    },
    updateToppings(newData) {
      this.chosenTopping = newData;
    },
    updateSugarLevel(newData) {
      this.chosenSugarLevel = newData;
    },
    updateIceLevel(newData) {
      this.chosenIceLevel = newData;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    document.title = "Customize";
  },
};
</script>
