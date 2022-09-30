<template>
  <div id="app">
    <v-row class="ml-4">
      <v-col cols="2" md="2">
        <LeftBar />
      </v-col>
      <v-col cols="8" md="8" class="tableright">
        <h1 class="table-title">My Payslips</h1>
        <PayslipTable />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftBar from "./components/LeftBar.vue";
import PayslipTable from "./components/PayslipTable.vue";

export default {
  name: "App",
  components: {
    LeftBar,
    PayslipTable,
  },
  data() {
    return {
      items: [
        { title: "Quick access", icon: "quick-access", active: true },
        { title: "My Information", icon: "my-information", active: false },
        { title: "My Payslips", icon: "my-payslips", active: false },
        { title: "Time Entry", icon: "time-entry", active: false },

        { title: "Leave", icon: "leave", active: false },
        { title: "Benefits", icon: "benefits", active: false },
        {
          title: "Organizational chart",
          icon: "organizational-chart",
          active: false,
        },
        { title: "My Team", icon: "my-team", active: false },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-header {
  background-color: #001738;
}
.text-w {
  color: #fff !important;
  text-align: start;
  font-weight: 600;
  font-size: 14px;
}
.py-2 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.mx-3 {
  margin-left: 24px !important;
  margin-right: 24px !important;
}
.nav-item-text {
  text-align: start;
  margin-left: 18px;
}
.bar {
  height: 48px;
  width: 3px;
  background-color: #ff5f1f;
  margin-right: 20px;
  border-radius: 10px;
}
.v-list,
.v-list-item {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.text-true {
  color: #ff5f1f !important;
}
.text-month {
  color: #ff5f1f !important;
}
.text-false {
  color: #001738 !important;
}
.bar-false {
  visibility: hidden;
}
.copyright {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: smaller;
}


</style>
