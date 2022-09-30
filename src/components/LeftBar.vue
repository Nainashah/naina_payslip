<template>
  <div class="mx-auto">
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" class="drawer"  height="100%" width="100%" style="min-height: 100vh">
      <v-list-item class="nav-header py-2">
        <div class="mx-3">
          <v-list-item-content class="title">
            <v-list-item-title v-if="!mini" class="text-h6 text-w">
              Employee 
            </v-list-item-title>
            <v-list-item-subtitle v-if="!mini" class="text-w">
              Self Service
            </v-list-item-subtitle>
          </v-list-item-content>
        </div>
      </v-list-item>

      <div style="position: relative">
        <v-btn class="drawer-control" icon @click.stop="mini = !mini">
          <v-icon v-if="mini" style="color: #fff">mdi-chevron-right</v-icon>
          <v-icon v-if="!mini" style="color: #fff">mdi-chevron-left</v-icon>
        </v-btn>
      </div>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="handleClick(item.title)"
        >
          <div v-if="!mini" :class="['bar' + ' ' + `bar-${item.active}`]" />
          <v-list-item-icon :class="[`icon-${mini}`]" >
            <img
              :src="
                require(`../assets/icons/${`${item.icon}-${item.active}.svg`}`)
              "
            />
          </v-list-item-icon>

          <v-list-item-content v-if="!mini">
            <v-list-item-title
              :class="['nav-item-text' + ' ' + `text-${item.active}`]"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <p v-if="!mini" class="copyright">Mercans &#169; 2021</p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "LeftBar",

  data() {
    return {
      mini: false,
      drawer: true,
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
    };
  },
  methods: {
    handleClick(title) {
      // console.log(title);
      this.items = this.items.map((el) => {
        return {
          ...el,
          active: el.title === title ? true : false,
        };
      });
    },
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
.drawer-control {
  position: absolute !important;
  right: 0;
  top: 0;
  transform: translate(0%, -100%);
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
.icon-true {
    padding-left: 12px;
}
@media only screen and (max-width: 600px) {
.drawer{
  margin-right: 30px;
}
.title{
  visibility: hidden;
}

  }
  
</style>
