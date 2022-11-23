<template>
  <div class="SelectLocation">
    <div v-if="isMobile()">
      <SelectLocationH5 />
    </div>
    <div v-else style="overflow-y: auto; height: calc(100vh - 84px)">
      <b-container class="bv-example-row" id="container-DTC" fluid>
        <MenuBar />
        <NavBar />
        <b-row>
          <b-col>
            <div class="dropdown">
              <div class="dropbtn">
                <div class="firstHeader">
                  <div>DISTRICT</div>
                  <div v-if="selectedDistrictName" class="secondHeader">
                    {{ selectedDistrict }}
                  </div>
                  <div v-else class="secondHeader">
                    Please choose the district that suits you
                  </div>
                </div>
              </div>
              <div
                v-if="districtList"
                id="districtDropdown"
                class="dropdown-content"
              >
                <a
                  v-for="district in districtList"
                  :key="district.districtId"
                  v-on:click="clickDistrict(district.id,district)"
                  >{{ district.Name }}</a
                >
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="dropdown">
              <div class="dropbtn">
                <div class="firstHeader">
                  <div>LIBRARY</div>
                  <div v-if="selectedLibraryName" class="secondHeader">
                    {{ selectedLibraryName }}
                  </div>
                  <div v-else class="secondHeader">
                    Please choose the library that suits you
                  </div>
                </div>
              </div>
              <div id="libraryDropdown" class="dropdown-content">
                <a
                  v-for="library in libraryResult"
                  :key="library.id"
                  v-on:click="clickLibraries(library.Name, library.id)"
                  >{{ library.Name }}</a
                >
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="dropdown">
              <div class="dropbtn">
                <div class="firstHeader">
                  <div>WORKSTATION TYPE</div>
                </div>
              </div>
              <div id="workStationDropdown">
                <div v-for="worktype in workStationTypeList" :key="worktype.id">
                  <div class="rectangle1">
                    <b-container>
                      <b-row>
                        <b-col cols="1" align="center" style="padding: 0px">
                          <input
                            type="radio"
                            id="workstationType"
                            name="fav_language"
                            v-on:click="
                              clickWorkstation(worktype.Name, worktype.id)
                            "
                          />
                        </b-col>
                        <b-col cols="10">
                          <label for="workstationType" style="padding: 0px">
                            <div class="firstfont">
                              {{ worktype.Name }}<br />
                            </div>
                            <div class="secondfont">WORKSTATION</div>
                          </label>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div style="height: 100px"></div>
      <PageFooter ref="pageFooterSection" />
    </div>
  </div>
</template>

<script>
import { mixins } from "@/common/mixins";
import NavBar from "@/components/NavBar.vue";
import { getAllDistrict } from "@/service/test.js";
import { getAllLibraries } from "@/service/test.js";
import { getWorkstation } from "@/service/test.js";
import SelectLocationH5 from "./SelectLocationH5.vue";
import PageFooter from "/src/components/PageFooter.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  name: "SelectLocation",
  components: { SelectLocationH5, NavBar, PageFooter, MenuBar },
  data() {
    return {
    
      selectedDistrict:null,
      districtList: null,
      selectedLibraryName: null,
      selectedLibraryId: null,
      libraryResult: null,
      selectedWorkstationType: null,
      selectedWorkstationTypeId: null,
      workStationTypeList: null,
    };
  },
  mixins: [mixins],
  props: ["selectionLocationPage"],

  methods: {
    clickDistrict(districtId,district) {
      let libraryList = getAllLibraries();
      this.libraryResult = libraryList.filter(
        (libraryList) => districtId == libraryList.DistrictId
      );
      this.selectedDistrict=district;
      this.$store.commit('selectedDistrict',this.selectedDistrict)
    },
    clickLibraries(Name, id) {
      this.selectedLibraryId = id;
      this.selectedLibraryName = Name;
       let value={'id':id,'name':Name}
      this.$store.commit('selectedLibrary',value)
    },
    clickWorkstation(Name, id) {
      this.selectedWorkstationTypeId = id;
      this.selectedWorkstationType = Name;
      let value={'id':id,'name':Name}
      this.$store.commit('selectedWorkType',value)
    },
  },

  mounted() {
    this.districtList = getAllDistrict();
    this.workStationTypeList = getWorkstation();
  },
};
</script>

<style scoped>
</style>