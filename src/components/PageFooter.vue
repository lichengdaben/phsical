<template>
  <div>
    <b-container
      fluid
      id="pageFooter"
      style="background-color: white; margin: 0px"
    >
      <b-row class="left-menu">
        <b-col cols="1" class="left-menu">
          <button id="pageFooterResetButton" @click="reset()">
            Reset&nbsp;&nbsp;<font-awesome-icon
              icon="fa-solid fa-rotate-right"
            />
          </button>
        </b-col>
        <br />
        <b-col cols="1" class="left-menu">
          <button id="pageFooterBackButton" @click="goBack()">
            Back&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-reply" />
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2" class="left-menu">
          <button id="pageFooterNextButton" @click="goNext()">
            Next&nbsp;&nbsp;<font-awesome-icon icon="fas fa-right-long" />
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      prefix: null,
      listOfPages: [
        "",
        "SelectLocation",
        "DateTimeChoose",
        "WorkstationGroup",
        "BookingDetails",
        "BookingConfirmation",
      ],
      currentPage: null,
      isShowReset: false,
      nextPage: null,
      nextText: null,
      isDisabled: null,
    };
  },
  props: ["pageFooterSection"],
  methods: {
    goBack() {
      //  數字 -1 代表返回上一步
      return this.$router.go(-1);
    },
    goNext() {
      if(this.$route.path=="/workstationbooking/SelectLocation"){
         this.$router.push("/workstationbooking/DateTimeChoose");
      }
      else if(this.$route.path=="/workstationbooking/DateTimeChoose"){
         this.$router.push("/workstationbooking/WorkstationGroup");
      }
      else  if(this.$route.path=="/workstationbooking/WorkstationGroup"){
         this.$router.push("/workstationbooking/BookingConfirmation");
      }
      
     // return this.$router.go(1);
    },
    reset() {
      (this.$store.state.selectedDistrict = "NotSelect"),
        (this.$store.state.selectedLibrary = "NotSelect"),
        (this.$store.state.selectedWorkType = "NotSelect"),
        (this.$store.state.selectedDate = "NotSelect"),
        (this.$store.state.selectedSession = ""),
        (this.$store.state.selectedTime = []);
        (this.$store.state.selectedWorkstationGroup = "");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pageFooter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 30px;
  position: fixed;
  bottom: 0px;
  z-index: 1;
}
.left-menu {
  display: flex;
  justify-content: space-evenly;
}
#pageFooter button {
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  height: 4%;
  min-height: 44px;
}

#pageFooterResetButton {
  background-image: linear-gradient(#fefefe, #f2f2f2);
  color: #676767;
  width: 8%;
  min-width: 96px;
}

#pageFooterBackButton {
  background-image: linear-gradient(#fefefe, #f2f2f2);
  color: #676767;
  width: 8%;
  min-width: 96px;
}

#pageFooterNextButton {
  float: right;
  background-image: linear-gradient(#1b7bd4, #0164c1);
  color: white;
  width: 14.5%;
  min-width: 174px;
}

#pageFooterNextButton:disabled {
  float: right;
  background-image: linear-gradient(#6baae3, #5b9bd7);
  color: white;
  width: 14.5%;
  min-width: 174px;
}

#pageFooter .btn {
  float: right;
  border: 0px !important;
  padding: 0px !important;
  width: 100%;
}
</style>
