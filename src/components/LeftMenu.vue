<template>
  <ul>
    <li>
      <div class="firstHeader">
        <div class="firstfont">DISTRICT:</div>
        <div class="secondfont">
          {{ this.$store.state.selectedDistrict.Name }}
        </div>
      </div>
    </li>
    <li>
      <div class="firstHeader">
        <div class="firstfont">LIBRARY:</div>
        <div class="secondfont">
          {{ this.$store.state.selectedLibrary.name }}
        </div>
      </div>
    </li>
    <li>
      <div class="firstHeader">
        <div class="firstfont">WorkstationType:</div>
        <div class="secondfont">
          {{ this.$store.state.selectedWorkType.name }}
        </div>
      </div>
    </li>
    <li>
      <div class="firstHeader">
        <div class="firstfont">Date:</div>

        <div class="secondfont" v-if="this.$store.state.selectedDate != null">
          {{ this.$store.state.selectedDate.Name }}
        </div>
        <div class="secondfont" v-if="this.$store.state.selectedDate != null">
          {{ this.$store.state.selectedDate.Date }}
        </div>
        <div class="firstfont">Session:</div>
        <div class="secondfont">{{ this.$store.state.selectedSession }}</div>
        <div class="firstfont">Time:</div>
        <div class="secondfont" v-if="this.$store.state.selectedTime != null&&this.$store.state.selectedTime.length==1"> {{ this.$store.state.selectedTime[0].name }}</div>
       <div class="secondfont" v-if="this.$store.state.selectedTime != null&&this.$store.state.selectedTime.length==2"> {{ this.$store.state.selectedTime[0].name}}&&{{this.$store.state.selectedTime[1].name}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {};
  },
  props: [],
  methods() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstfont {
  color: #096bcc;
  font-weight: bold;
}

.secondfont {
  color: black;
  font-weight: bold;
}
.thirdfont {
  color: black;
}

.vs-button-primary.vs-button-filled {
  color: grey;
  background: white !important;
  border: 1px solid #c8c8c8;
}
</style>
