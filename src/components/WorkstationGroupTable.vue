<template>
  <div class="table">
    <table class="table2">
      <tr>
        <th v-for="th in fields" :key="th">{{ th }}</th>
      </tr>
      <tr v-for="workstation in workstationGroup" :key="workstation.id">
        <td>
          <label for="workStation" style="font-weight: bold"></label>
          <input
            type="checkbox"
            id="workStation"
            name="workStation"
            @click="clickWorkStation(workstation)"
          />
        </td>
        <td>{{ workstation.Name }}</td>
        <td>{{ workstation.State }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getWorkstationGroup } from "@/service/test.js";
export default {
  name: "WorkstationGroupTable",
  data() {
    return {
      fields: ["    ", "WorkStationName", "State"],
      workstationGroup: null,
      selectedWorkstationGroup: null,
    };
  },
  methods: {
    clickWorkStation(workstation) {
      if (event.target.checked) {
        if (workstation.State != "Available") {
          alert("It is not available please choose another one");
          event.target.checked = false;
        } else {
          this.selectedWorkstationGroup = workstation;
          this.$store.commit(
            "selectedWorkstationGroup",
            this.selectedWorkstationGroup
          );
        }
      } else {
        event.target.checked = false;
        this.selectedWorkstationGroup = null;
        this.$store.commit(
          "selectedWorkstationGroup",
          this.selectedWorkstationGroup
        );
      }
    },
  },
  mounted() {
    this.workstationGroup = getWorkstationGroup();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  display: flex;
  flex: 1;
  height: 350px;
  overflow-y: auto;
}

.table th {
  font-weight: bold;
  background-color: #096bcc;
}

.table2 {
  width: 100%;
  margin: 10px;
}
</style>
