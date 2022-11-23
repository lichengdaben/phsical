<template>
  <b-container>
    <div class="firstHeader">
      <div class="firstfont">DATE OF USE</div>
      <div class="secondfont" style="padding: 0px 0px 20px 0px; margin: 0px">
        {{ currentDateTime }}
      </div>
      <div class="dateArray">
        <div v-for="date in datePeriod" :key="date.id">
          <button class="dateButton" @click="clickDate(date)">
            {{ date.Name }}
            {{ date.Date }}
            <br />
            <span style="color: #096bcc; font-size: small">
              {{ date.State }}</span
            >
            <div
              v-if="
                selectedDate != null &&
                selectedDate.id == date.id &&
                display == true
              "
            >
              Selected
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="firstHeader">
      <div class="firstfont">SESSION DURATION</div>
      <div class="secondfont" style="padding: 10px 0px 0px 0px; margin: 0px">
        Usage Of time
      </div>
      <div class="buttonContainer">
        <button class="button1" @click="clickSession1">
          1 Hour<br />
          <span style="color: #096bcc; font-size: small">
            You can choose one hour time
          </span>
          <span v-show="displayHour"> Selected</span>
        </button>
        <button class="button1" @click="clickSession2">
          2 Hour<br />
          <span style="color: #096bcc; font-size: small">
            You can choose to use it 2 consecutive hours
          </span>
          <span v-show="displayHour2"> Selected</span>
        </button>
      </div>
    </div>
    <div class="firstHeader">
      <div class="firstfont">TIME PERIOD</div>

      <div class="period">
        <div class="periodSession">
          <div class="secondfont">Morning</div>
          <div class="secondfont">Afternoon</div>
          <div class="secondfont">Evening</div>
        </div>
        <div class="timeArray">
          <div class="periodTime" v-for="time in timePeriod" :key="time.id">
            <label for="timePeriod" style="font-weight: bold">{{
              time.name
            }}</label>
            <input
              type="checkbox"
              id="timePeriod"
              name="timePeriod"
              @click="clickTime(time)"
            />
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { getTimePeriod } from "@/service/test.js";
import { getDate } from "@/service/test.js";
export default {
  name: "DateTimeChooseTable",
  data() {
    return {
      timePeriod: null,
      currentDateTime: null,
      datePeriod: null,
      selectedDate: null,
      selectedSession: null,
      selectedTime: [],
      display: false,
      displayHour: null,
      displayHour2: null,
    };
  },
  props: [],
  methods: {
    clickDate(date) {
      if (date.State == "Close" || date.State == "FullBooking") {
        alert("Please choose another session");
      } else {
        this.display = !this.display;
        if (this.display == true) {
          this.selectedDate = date;
          this.$store.commit("selectedDate", this.selectedDate);
        } else {
          this.selectedDate = null;
          this.$store.commit("selectedDate", this.selectedDate);
        }
      }
    },
    clickSession1() {
      if (this.selectedTime.length == 0) {
        this.selectedSession = 1;
        this.displayHour = !this.displayHour;
        if (this.displayHour == true) {
          this.$store.commit("selectedSession", 1);
          this.displayHour2 = false;
        } else {
          this.selectedSession = null;
          this.$store.commit("selectedSession", null);
        }
      } else {
        alert(
          "you have selected session before,please cancel your time period first"
        );
      }
    },
    clickSession2() {
      if (this.selectedTime.length == 0) {
        this.selectedSession = 2;
        this.displayHour2 = !this.displayHour2;
        if (this.displayHour2 == true) {
          this.$store.commit("selectedSession", 2);
          this.displayHour = false;
        } else {
          this.selectedSession = null;
          this.$store.commit("selectedSession", null);
        }
      } else {
        alert(
          "you have selected session before,please cancel your time period first"
        );
      }
    },
    clickTime(time) {
      if (this.selectedSession == null) {
        alert("please choose session first");
        event.target.checked = false;
      } else if (this.selectedSession == 1) {
        if (event.target.checked == true) {
          this.selectedTime.push(time);
          if (this.selectedTime.length == 1) {
            this.$store.commit("selectedTime", this.selectedTime);
          } else if (this.selectedTime.length > 1) {
            alert("You only can choose one hour");
            this.selectedTime.pop();
            event.target.checked = false;
          }
        } else {
          this.selectedTime = [];
          this.$store.commit("selectedTime", this.selectedTime);
        }
      } else if (this.selectedSession == 2) {
        if (event.target.checked == true) {
          this.selectedTime.push(time);
          if (this.selectedTime.length == 2) {
            this.selectedTime.sort(this.sortBasedProperty("id"));
            console.log("checkconSecutive");
            if (this.selectedTime[0].id + 1 != this.selectedTime[1].id) {
              alert("Your hour is not consecutive hours");
              this.selectedTime.pop();
              event.target.checked = false;
            } else {
              this.$store.commit("selectedTime", this.selectedTime);
            }
          } else if (this.selectedTime.length > 2) {
            alert("You cannot choose more than one hour");
            event.target.checked = false;
          }
        } else {
          for (let i = 0; i < this.selectedTime.length; i++) {
            if (this.selectedTime[i] == time)
              this.selectedTime.splice(this.selectedTime.indexOf(time), 1);
          }
        }
      }
    },
  },
  mounted() {
    this.timePeriod = getTimePeriod();
    this.datePeriod = getDate();
    this.currentDateTime = new Date().toDateString();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dateArray {
  display: flex;
  flex-direction: row;

  padding: 10px;
  border-radius: 0.25rem !important;
  background-color: transparent;
  border: 1px solid rgb(246, 240, 240);
  font-weight: bold;
}

.dateButton {
  border-radius: 0.25rem !important;
  background-color: transparent;
  margin: 10px;
  border: 1px solid rgb(246, 240, 240);
  font-weight: bold;
  height: 100px;
}

.dateButton:hover {
  border-radius: 0.25rem !important;
  background-color: transparent;
  margin: 10px;
  border: 3px solid #096bcc;
  font-weight: bold;
}
.buttonContainer {
  display: flex;
  flex-direction: row;
  margin: 20px;
}

.button1 {
  padding: 20px;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgb(246, 240, 240);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  height: 100px;
  border-radius: 0.25rem !important;
  margin: 20px;
  font-weight: bold;
}

.button1:hover {
  padding: 20px;
  align-items: center;
  background-color: transparent;
  border: 3px solid #096bcc;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  height: 100px;
  border-radius: 0.25rem !important;
  margin: 20px;
  font-weight: bold;
}

.period {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgb(246, 240, 240);
}

.timeArray {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.periodSession {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.periodTime {
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(246, 240, 240);
}
</style>