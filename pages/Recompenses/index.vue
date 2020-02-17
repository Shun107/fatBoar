<template>
    <div id="app">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
        <div class="container dashboard">
        <br/>
        <h1><p>{{ name }}</p></h1>
        <br/>
        <b-row>
          <b-col><div class="chart"><bar-chart :data="chartData"></bar-chart></div></b-col>
          <b-col><div class="chart"><bar-chart :data="chartData"></bar-chart></div></b-col>
          <b-col><div class="chart"><column-chart  :data="chartData"></column-chart ></div></b-col>
        </b-row>
        <br/><br/>
        <b-row>
          <b-col><div class="chart"><pie-chart :data="chartData"></pie-chart></div></b-col>
          <b-col><div class="chart"><line-chart :data="chartData"></line-chart></div></b-col>
        </b-row>
        <br/><br/>
        <div class="chart"><b-table striped hover :items="items" :fields="fields"></b-table></div>
        <br/>
        </div>
    </div>
</template>
<style>
#app{
  background: lightgray;
}

.headerNavbar {
    border-bottom: 27px solid darkred;
}
.dashboard{
  background: #FFFFFF;
}
.chart{
    background: repeat;
    box-shadow: -1px 2px 5px 1px rgba(0, 0, 0, 0.7), -1px 2px 20px rgba(255, 255, 255, 0.6) inset;
}
</style>
<script>
import axios from 'axios'
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))


  export default {
    asyncData ({ params, error }) {
    return axios.get("https://api.myjson.com/bins/18wuas")
      .then((res) => res.data)
      .catch((e) => {
        error({ statusCode: 404, message: 'Billet non trouvé' })
      })
    },
    data() {
      return {
        chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]],
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true
            // Variant applies to the whole column, including the header and footer
           // variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>