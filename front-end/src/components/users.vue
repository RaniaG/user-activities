<template>
  <div class="row">
    <div class="col-md-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">User</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
            <th scope="col">Session Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userSessionData" :key="item.userId+item.sessionId+item.activity">
            <td>{{item.user}}</td>
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
import { Consts } from "../consts";
import chart from "./barChart";
import { generateRandomColor } from "../helpers";
export default {
  data: function() {
    return {
      userSessionData: [],
      userData: [],
      uniqueActivities: [],
      uniqueUser: [],
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
      let uniqueUsers = this.uniqueUsers.map(e => e.name);
      let userData = this.userData;
      this.chartData = {
        labels: uniqueUsers,
        datasets: this.uniqueActivities.map(act => {
          return {
            label: act,
            backgroundColor: generateRandomColor(),
            data: this.uniqueUsers.map(e => {
              debugger;
              const userAct = userData.find(
                i => i.userId == e.id && i.activity == act
              );
              if (userAct) return +userAct.duration;
              return 0;
            })
          };
        })
      };
      console.log(this.chartData);
    }
  },
  created() {
    this.$http.get(Consts.baseUrl + Consts.usersRoute).then(
      response => {
        this.userSessionData = response.body.userSessionData;
        this.userData = response.body.userData;
        this.uniqueActivities = response.body.uniqueActivities.map(e => e.name);
        this.uniqueUsers = response.body.uniqueUsers;
        this.prepChartData();
      },
      response => {
        // error callback
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>