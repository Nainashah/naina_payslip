<template>
  <div class="mytable">
    <TableHeader />
    <v-simple-table
      id="mytable"
      style="padding: 45px"
      :headers="headers"
      :items="payslips"
      :items-per-page="12"
      class="elevation-1"
      :single-expand="singleExpand"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th
              class="text-start"
              v-for="header in headers"
              :key="header.value"
            >
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="openSlip(slip.payslip)"
            v-for="slip in payslips"
            :key="slip.serial"
          >
            <td class="text-start">{{ slip.serial }}</td>
            <td class="text-start">
              <div class="month-expand">
                <span class="material-symbols-outlined">
                  unfold_more
                  <!-- @click="dialog()" -->
                </span>
                <div class="text-month">
                  {{ slip.month }}
                </div>
              </div>
            </td>
            <td class="text-start">{{ slip.payslip }}</td>
            <td class="text-start">{{ slip.salary }}</td>
            <td class="text-start">{{ slip.net }}</td>
          </tr>
        </tbody>
      </template>

      <!-- <template v-slot:[`item.month`]="{ item }">
            <div class="month-expand">
              <span class="material-symbols-outlined"> unfold_more </span>
              <div class="text-month">
                {{ item.month }}
              </div>
            </div>
          </template> -->
    </v-simple-table>
  </div>
</template>
<script>
import TableHeader from "./TableHeader.vue";
export default {
  name: "PayslipTable",
  components: {
    TableHeader,
  },
  data() {
    return {
      headers: [
        {
          text: "#",
          value: "serial",
        },
        {
          text: "Month ",
          width: 200,
          align: "start",
          value: "month",
        },
        { text: "Payslips", align: "start", value: "payslip" },
        { text: "Gross salary", align: "start", value: "salary" },
        { text: "Net Pay", align: "start", value: "net" },
      ],

      payslips: [
        {
          serial: 1,
          month: "December 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 2,
          month: "November 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 3,
          month: "October 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 4,
          month: "September 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 5,
          month: "August 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 6,
          month: "July 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 7,
          month: "June 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 8,
          month: "May 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 9,
          month: "April 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 10,
          month: "March 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 11,
          month: "February 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
        {
          serial: 12,
          month: "January 2021",
          payslip: "Payslip-TF2018-Ted Ferguson-2021-12-01-2021-12-31.pdf",
          salary: "2940.87 EUR",
          net: "2268.00 EUR",
        },
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
.py-2 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.mx-3 {
  margin-left: 24px !important;
  margin-right: 24px !important;
}

.v-list,
.v-list-item {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.text-month {
  color: #ff5f1f !important;
}
.month-expand {
  display: flex;
}
.month-expand > span {
  margin-right: 12px;
  display: none;
}
.table-title {
  font-size: 24px;
  text-align: left;
  padding-left: 20px;
  padding-top: 40px;
  color: #001738;
  margin-bottom: 30px;
  font-weight: bold;
}
.text-start {
  text-align: start;
}

tbody > tr:hover {
  background-color: #fee5db !important;
  span {
    display: block;
  }
}

.mytable {
  border: 1px solid #fee5db !important;
  border-radius: 12px 30px 12px 12px;
}
@media only screen and (max-width: 600px) {
  .col-md-8{
    margin-left: 30px;
  }
}

</style>
