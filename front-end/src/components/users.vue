<template>
  <div class="row">
    <div class="col-md-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
            <th scope="col">Session Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userSessionData" :key="item.userId+item.sessionId+item.activity">
            <td>{{item.userId}}</td>
            <td>{{item.activity}}</td>
            <td>{{item.duration}}</td>
            <td>{{item.sessionId}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <app-bar-chart :chartData="chartData" :options="chartOptions"></app-bar-chart>
    </div>
  </div>
</template>

<script>
import chart from "./barChart";
import { generateRandomColor } from "../helpers";
export default {
  data: function() {
    return {
      userSessionData: [
        { userId: 2, activity: "Facebook", duration: 30, sessionId: 3 },
        { userId: 2, activity: "Facebook", duration: 10, sessionId: 2 },
        { userId: 3, activity: "IDE", duration: 50, sessionId: 1 },
        { userId: 4, activity: "Browser", duration: 120, sessionId: 4 }
      ],
      userData: [
        { userId: 2, activity: "Facebook", duration: 30 },
        { userId: 3, activity: "IDE", duration: 50 },
        { userId: 4, activity: "Browser", duration: 120 }
      ],
      uniqueActivities: ["Facebook", "IDE", "Browser"],
      chartData: {},
      chartOptions: {
        barValueSpacing: 20,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      }
    };
  },
  components: {
    "app-bar-chart": chart
  },
  methods: {
    prepChartData() {
      this.chartData = {
        labels: this.userData.map(e => e.userId),
        datasets: this.uniqueActivities.map(act => {
          return {
            label: act,
            backgroundColor: generateRandomColor(),
            data: this.userData.map(e => {
              if (e.activity == act) return e.duration;
              return 0;
            })
          };
        })
      };
    }
  },
  created() {
    this.prepChartData();
  }
};
</script>

<style lang="scss" scoped>
</style>