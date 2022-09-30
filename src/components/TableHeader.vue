<template>
  <div class="header-nav">
    <v-btn
      text
      :class="currency === 'EUR' ? 'btn-active' : 'btn-inactive'"
      color="#fff"
      text-align="left"
      @click="toggleCurrency('EUR')"
    >
      Eur(12)
    </v-btn>
    <v-btn
      text
      :class="currency === 'USD' ? 'btn-active' : 'btn-inactive'"
      color="#fff"
      text-align="left"
      @click="toggleCurrency('USD')"
    >
      USD(12)
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
  data() {
    return {
      currency: "EUR",
    };
  },
  methods: {
    toggleCurrency(currency) {
      this.currency = currency;
    },
  },
};
</script>

<style lang="scss">
.header-nav {
  height: 56px;
  background-color: #001738;
  border-radius: 8px 30px 30px 8px;
  display: flex;
  align-items: center;
}
.btn-active {
  background-color: #ff5f1f;
}
.v-btn--text {
  height: 58px !important;
}
</style>
