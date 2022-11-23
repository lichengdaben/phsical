<template>
  <div class="BookingSystem">
    <div style="overflow-y: auto; height: calc(100vh - 84px)">
      <MenuBar />

    <!--  <b-container class="bv-example-row">
        <b-row class="squaregroup">
          <b-col type="button" class="square1" @click="goToHome()">
            <div>
              <font-awesome-icon icon="fa-solid fa-display" />
              <div>我要預約</div>
              <div>Book Now</div>
            </div>
          </b-col>
        </b-row>
      </b-container>-->
    </div>
  </div>
</template>


<script>
import MenuBar from "@/components/MenuBar.vue";
import { mixins } from "@/common/mixins";

export default {
  name: "BookingSystem",
  components: {
    MenuBar,
  },
  data() {
    return {
      active: false,
    };
  },
  mixins: [mixins],
  props: {
    msg: String,
  },
  methods: {
    goToHome() {
      if (this.$store.state.userName == null) {
        this.$router.push("login");
      } else {
        this.$router.push("/workstationbooking/SelectLocation");
      }
    },
  },
};
</script>

<style scoped>
.square1 {
  width: 233px;
  height: 233px;
  background: #f2653e 0% 0% no-repeat padding-box;
  border-radius: 38px;
  opacity: 1;
  text-align: center;
}

.square2 {
  width: 175px;
  height: 175px;
  background: #f2653e 0% 0% no-repeat padding-box;
  border-radius: 26px;
  opacity: 1;
  margin: 20px;
  text-align: center;
}

.square1 > div {
  margin: 35% auto;
}
.square2 > div {
  margin: 35% auto;
}
.squareline {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

div {
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal bold 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 2em;
  overflow: visible;
  vertical-align: -0.125em;
}

p {
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal bold 26px/34px Roboto;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 1;
  margin: 0;
  font-weight: bold;
}

.squaregroup {
  display: flex;
}
</style>
