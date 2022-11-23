<template>
    <nav>
      <b-container  class="cataloguebutton" fluid>
        <b-row>
          <b-col cols="4" id="title">
            <h1 class="app_header">PLACE WORKSTATION BOOKING</h1>
            <h2 class="app_title">{{ this.title }}</h2>
          </b-col>
          <b-col class="cfm_nav_pagestep">
            <ul>
              <li>
                <router-link to="/workstationbooking/BookingConfirmation" class="cataloguebutton"
                  :style="{ 'color': this.currentPage == 5 ? '#096BCC !important' : 'black' }">BOOKING<br>CONFIRMATION</router-link>
              </li>
              <li>
                <router-link to="/workstationbooking/WorkstationGroup" class="cataloguebutton"
                  :style="{ 'color': this.currentPage == 3 ? '#096BCC !important' : 'black' }">WORKSTATION<br>GROUP</router-link>
              </li>
              <li>
                <router-link to="/workstationbooking/DateTimeChoose" class="cataloguebutton"
                  :style="{ 'color': this.currentPage == 2 ? '#096BCC !important' : 'black' }">DATE/TIME<br>CHOOSE</router-link>
              </li>
              <li>
                <router-link to="/workstationbooking/SelectLocation" class="cataloguebutton"
                  :style="{ 'color': this.currentPage == 1 ? '#096BCC !important' : 'black' }">SELECT<br>LOCATION</router-link>
              </li>
              <li>
                <router-link to="/" class="cataloguebutton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg> HOME</router-link>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        listOfPages: [ '', 'SelectLocation', 'DateTimeChoose', 'WorkstationGroup', 'BookingDetails', 'BookingConfirmation' ],
        title: null
      }
    },
    created() {
      this.currentPage = this.listOfPages.indexOf(this.$route.name);
      switch (this.currentPage) {
        case 1: this.title = 'SELECT LOCATION'; break;
        case 2: this.title = 'DATE/TIME CHOOSE'; break;
        case 3: this.title = 'WORKSTATION GROUP'; break;
        case 4: this.title = 'BOOKING DETAILS'; break;
        case 5: this.title = 'BOOKING CONFIRMATION'; break;
      }
    }
  }
</script>