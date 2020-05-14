<template>
  <div class="row">
    <div class="col-md-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Team Id</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.teamId+item.activity"
            @click="prepareChartData(item.teamId)"
            :class="{'active':item.teamId==activeTeamId}"
          >
            <td>{{item.team}}</td>
            <td>{{item.activity}}</td>
            <td>{{item.duration}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6" v-if="activeTeamId>0">
      <app-donut-chart :chartData="chartData" :options="chartOptions"></app-donut-chart>
    </div>
  </div>
</template>

<script>
import { Consts } from "../consts";
import chart from "./donutChart";
import { generateRandomColor } from "../helpers";
export default {
  data: function() {
    return {
      data: [],
      activeTeamId: -1,
      chartData: {},
      chartOptions: {}
    };
  },
  components: {
    "app-donut-chart": chart
  },
  methods: {
    prepareChartData(teamId) {
      this.activeTeamId = teamId;
      let teamData = this.data.filter(e => e.teamId == teamId);
      this.chartData = {
        labels: teamData.map(e => e.activity),
        datasets: [
          {
            label: "# of Votes",
            data: teamData.map(e => e.duration),
            backgroundColor: teamData.map(e => generateRandomColor())
          }
        ]
      };
    }
  },
  created() {
    this.$http.get(Consts.baseUrl + Consts.teamsRoute).then(
      response => {
        this.data = response.body;
      },
      response => {
        // error callback
      }
    );
  }
};
</script>

<style lang="scss" scoped>
tbody tr:hover {
  cursor: pointer;
}
tbody tr.active {
  background-color: #e9ecef;
}
</style>